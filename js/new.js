// Simple terminal typing effect
document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal-content');
    const commands = [
        "nmap -sV -T4 target.com"
    ];

    let currentCommand = 0;

    function typeNextCommand() {
        if (currentCommand < commands.length) {
            const prompt = terminal.querySelector('span:last-child');
            prompt.classList.remove('blink');

            const newLine = document.createElement('div');
            newLine.innerHTML = `$ ${commands[currentCommand]}<br><span>> Command executed successfully</span><br><br><span>$ <span class="blink">_</span></span>`;
            terminal.appendChild(newLine);

            currentCommand++;
            prompt.classList.add('blink');

            // Auto-scroll to bottom
            terminal.scrollTop = terminal.scrollHeight;

            // Schedule next command
            setTimeout(typeNextCommand, 3000);
        }
    }

    setTimeout(typeNextCommand, 5000);
});