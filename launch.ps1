# World Map Desktop Launcher for Windows (100% Offline, Zero-Install)
# Runs a local server on 127.0.0.1 and opens directly in dedicated App Window Mode

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

$PORT = 5173
$HOST_ADDR = "127.0.0.1"
$URL = "http://$HOST_ADDR`:$PORT/"
$distPath = Join-Path $scriptDir "dist"

if (-not (Test-Path $distPath)) {
    Write-Host "[!] 'dist' folder not found. Building application..." -ForegroundColor Yellow
    if (Get-Command npm -ErrorAction SilentlyContinue) {
        npm run build
    } else {
        [System.Windows.Forms.MessageBox]::Show("'dist' folder not found and npm is not installed. Please build the project first.", "Error", 0, 16)
        exit 1
    }
}

# Function to find installed Chromium-based browser for App Window Mode
function Get-AppBrowser {
    $candidatePaths = @(
        "$env:ProgramFiles (x86)\Microsoft\Edge\Application\msedge.exe",
        "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
        "$env:LocalAppData\Microsoft\Edge\Application\msedge.exe",
        "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
        "$env:ProgramFiles (x86)\Google\Chrome\Application\chrome.exe",
        "$env:LocalAppData\Google\Chrome\Application\chrome.exe",
        "$env:ProgramFiles\BraveSoftware\Brave-Browser\Application\brave.exe"
    )

    foreach ($path in $candidatePaths) {
        if (Test-Path $path) {
            return $path
        }
    }
    return $null
}

$browserExe = Get-AppBrowser

# Start Server
# If Node is available, use server.cjs
$serverProcess = $null
if (Get-Command node -ErrorAction SilentlyContinue) {
    $serverProcess = Start-Process -FilePath "node" -ArgumentList "scripts/server.cjs" -WindowStyle Hidden -PassThru
} else {
    # Built-in PowerShell .NET HttpListener (Runs without Node.js!)
    $listenerScript = @"
`$listener = New-Object System.Net.HttpListener
`$listener.Prefixes.Add('$URL')
`$listener.Start()

`$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.js'   = 'text/javascript; charset=utf-8'
    '.mjs'  = 'text/javascript; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.png'  = 'image/png'
    '.ico'  = 'image/x-icon'
}

`$dist = '$distPath'

while (`$listener.IsListening) {
    try {
        `$context = `$listener.GetContext()
        `$request = `$context.Request
        `$response = `$context.Response

        `$cleanUrl = `$request.Url.LocalPath
        if (`$cleanUrl -eq '/' -or `$cleanUrl -eq '\') { `$cleanUrl = '/index.html' }
        `$filePath = Join-Path `$dist `$cleanUrl.TrimStart('/')

        if (-not (Test-Path `$filePath -PathType Leaf)) {
            `$filePath = Join-Path `$dist 'index.html'
        }

        `$bytes = [System.IO.File]::ReadAllBytes(`$filePath)
        `$ext = [System.IO.Path]::GetExtension(`$filePath).ToLower()
        `$contentType = if (`$mimeTypes.ContainsKey(`$ext)) { `$mimeTypes[`$ext] } else { 'application/octet-stream' }

        `$response.ContentType = `$contentType
        `$response.ContentLength64 = `$bytes.Length
        `$response.OutputStream.Write(`$bytes, 0, `$bytes.Length)
        `$response.Close()
    } catch {
        # continue loop
    }
}
"@
    $encoded = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($listenerScript))
    $serverProcess = Start-Process -FilePath "powershell.exe" -ArgumentList "-NoProfile", "-WindowStyle", "Hidden", "-EncodedCommand", $encoded -PassThru
}

# Wait for server to bind
Start-Sleep -Milliseconds 600

# Launch in App Window Mode
$appProcess = $null
if ($browserExe) {
    $appArgs = @(
        "--app=$URL",
        "--window-size=1366,850",
        "--user-data-dir=$env:TEMP\WorldMapEdgeProfile"
    )
    $appProcess = Start-Process -FilePath $browserExe -ArgumentList $appArgs -PassThru
} else {
    # Fallback to default browser
    Start-Process $URL
}

# Wait for window to close, then clean up server
if ($appProcess) {
    $appProcess.WaitForExit()
}

# Terminate server
if ($serverProcess -and -not $serverProcess.HasExited) {
    Stop-Process -Id $serverProcess.Id -Force -ErrorAction SilentlyContinue
}
