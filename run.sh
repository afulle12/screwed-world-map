#!/usr/bin/env bash
# ==============================================================================
# World Map Desktop Launcher for Linux (100% Offline, Zero Network Activity)
# Launches a local server and opens directly in dedicated App Window Mode
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PORT=5173
HOST="127.0.0.1"
URL="http://${HOST}:${PORT}/"
DIST_DIR="${SCRIPT_DIR}/dist"

# 1. Ensure production build exists
if [ ! -d "$DIST_DIR" ] || [ ! -f "$DIST_DIR/index.html" ]; then
    echo "[!] Production bundle not found in dist/. Building application..."
    if command -v npm >/dev/null 2>&1; then
        npm run build
    else
        echo "[X] Error: 'dist' directory missing and 'npm' is not installed."
        exit 1
    fi
fi

# 2. Check if server is already running on the port
SERVER_PID=""
if ! curl -s --connect-timeout 1 "$URL" >/dev/null 2>&1; then
    echo "[*] Starting local HTTP server on ${HOST}:${PORT}..."
    if command -v node >/dev/null 2>&1; then
        node "${SCRIPT_DIR}/scripts/server.cjs" >/dev/null 2>&1 &
        SERVER_PID=$!
    elif command -v python3 >/dev/null 2>&1; then
        python3 -m http.server "$PORT" --bind "$HOST" --directory "$DIST_DIR" >/dev/null 2>&1 &
        SERVER_PID=$!
    else
        echo "[X] Error: Neither Node.js nor Python3 found to serve static files."
        exit 1
    fi

    # Wait briefly for server to bind
    for i in {1..30}; do
        if curl -s --connect-timeout 1 "$URL" >/dev/null 2>&1; then
            break
        fi
        sleep 0.1
    done
fi

cleanup() {
    if [ -n "$SERVER_PID" ]; then
        echo ""
        echo "[*] Shutting down local server (PID: $SERVER_PID)..."
        kill "$SERVER_PID" >/dev/null 2>&1 || true
    fi
}
trap cleanup EXIT INT TERM

# 3. Detect best browser for dedicated App Window Mode (no address bar, no tabs)
BROWSER_CMD=""

# A. Flatpak Chromium (common on modern Linux e.g. Silverblue/Bazzite/Fedora/Ubuntu)
if command -v flatpak >/dev/null 2>&1; then
    INSTALLED_FLATPAKS=$(flatpak list --app 2>/dev/null || true)
    if echo "$INSTALLED_FLATPAKS" | grep -q "io.github.ungoogled_software.ungoogled_chromium"; then
        BROWSER_CMD="flatpak run io.github.ungoogled_software.ungoogled_chromium --app=${URL} --window-size=1366,850"
    elif echo "$INSTALLED_FLATPAKS" | grep -q "com.google.Chrome"; then
        BROWSER_CMD="flatpak run com.google.Chrome --app=${URL} --window-size=1366,850"
    elif echo "$INSTALLED_FLATPAKS" | grep -q "org.chromium.Chromium"; then
        BROWSER_CMD="flatpak run org.chromium.Chromium --app=${URL} --window-size=1366,850"
    elif echo "$INSTALLED_FLATPAKS" | grep -q "com.brave.Browser"; then
        BROWSER_CMD="flatpak run com.brave.Browser --app=${URL} --window-size=1366,850"
    elif echo "$INSTALLED_FLATPAKS" | grep -q "com.microsoft.Edge"; then
        BROWSER_CMD="flatpak run com.microsoft.Edge --app=${URL} --window-size=1366,850"
    fi
fi

# B. Native Chromium-based browsers
if [ -z "$BROWSER_CMD" ]; then
    for b in google-chrome google-chrome-stable chromium chromium-browser brave-browser brave microsoft-edge; do
        if command -v "$b" >/dev/null 2>&1; then
            BROWSER_CMD="$b --app=${URL} --window-size=1366,850"
            break
        fi
    done
fi

# C. Firefox fallback (opens new window)
if [ -z "$BROWSER_CMD" ]; then
    if command -v flatpak >/dev/null 2>&1 && echo "$INSTALLED_FLATPAKS" | grep -q "org.mozilla.firefox"; then
        BROWSER_CMD="flatpak run org.mozilla.firefox --new-window ${URL}"
    elif command -v firefox >/dev/null 2>&1; then
        BROWSER_CMD="firefox --new-window ${URL}"
    fi
fi

# D. Generic desktop opener
if [ -z "$BROWSER_CMD" ]; then
    if command -v xdg-open >/dev/null 2>&1; then
        BROWSER_CMD="xdg-open ${URL}"
    fi
fi

if [ -z "$BROWSER_CMD" ]; then
    echo "[!] Could not detect an installed web browser."
    echo "[*] Please open ${URL} in your browser."
    # Keep server alive
    wait "$SERVER_PID"
    exit 0
fi

echo "[✓] Opening World Map in dedicated App Window..."
# Execute the browser command and wait for window exit
eval "$BROWSER_CMD"

echo "[✓] App window closed. Exiting."
