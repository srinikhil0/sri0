document.addEventListener("DOMContentLoaded", function() {
    const terminalContent = document.getElementById('terminal-content');
    const terminalInput = document.getElementById('terminal-input');
    const terminal = document.getElementById('terminal');
    const maximizeButton = document.getElementById('maximize');
    const minimizeButton = document.getElementById('minimize');

    const landingText = "Welcome to my personal website! Type 'help' to get started.";

    // Display initial landing text once when the page loads
    displayLandingText();

    maximizeButton.addEventListener('click', () => {
        terminal.classList.toggle('fullscreen');
    });

    minimizeButton.addEventListener('click', () => {
        terminal.classList.remove('fullscreen');
    });

    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputText = terminalInput.value;
            terminalInput.value = '';
            handleCommand(inputText);
        }
    });

    function handleCommand(command) {
        const commandElement = document.createElement('p');
        commandElement.textContent = `$ ${command}`;
        terminalContent.appendChild(commandElement);
        scrollToBottom();

        switch (command.toLowerCase()) {
            case 'help':
                displayHelp();
                break;
            case 'about':
                displayAbout();
                break;
            case 'projects':
                displayProjects();
                break;
            case 'contact':
                displayContact();
                break;
            case 'skills':
                displaySkills();
                break;
            case 'clear':
                clearScreen();
                break;
            default:
                displayError(command);
                break;
        }
    }

    function displayHelp() {
        const helpText = `
Available commands:
  help       - Display available commands
  about      - About me
  projects   - My projects
  contact    - Contact information
  skills     - My skills
  clear      - Clear the terminal screen
        `;
        displayOutput(helpText);
    }

    function displayAbout() {
        const aboutText = `
Hi, I'm [Your Name], a software engineer with a background in computer science and security. I have experience in teaching, software development, and leading teams. Welcome to my personal website!
        `;
        displayOutput(aboutText);
    }

    function displayProjects() {
        const projectsText = `
1. Secure Software Development
2. Parkinson's Disease Detection using Machine Learning
        `;
        displayOutput(projectsText);
    }

    function displayContact() {
        const contactText = `
You can contact me at:
Email: your.email@example.com
LinkedIn: linkedin.com/in/yourprofile
        `;
        displayOutput(contactText);
    }

    function displaySkills() {
        const skillsText = `
My Skills:
- Python
- SQL
- Bash Scripting
- Wireshark
- Unix/Linux
- Splunk
- NIST security framework
- SonarCloud
- OWASP ZAP GUI
- Log Analysis
- IDS/IPS
- Insider Threat analysis
- Git
- Microsoft Office
- Informatica
- Tableau
        `;
        displayOutput(skillsText);
    }

    function displayError(command) {
        const errorText = `Command not found: ${command}`;
        displayOutput(errorText);
    }

    function displayOutput(text) {
        const outputElement = document.createElement('p');
        typeWriter(outputElement, text);
        terminalContent.appendChild(outputElement);
        scrollToBottom();
    }

    function typeWriter(element, text, i = 0) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => {
                typeWriter(element, text, i + 1);
                scrollToBottom(); // Scroll during typing
            }, 5); // Typing speed, can be adjusted
        } else {
            scrollToBottom(); // Final scroll to bottom
        }
    }

    function scrollToBottom() {
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    function clearScreen() {
        terminalContent.innerHTML = '';
        displayLandingText();
    }

    function displayLandingText() {
        const landingElement = document.createElement('p');
        landingElement.textContent = landingText;
        terminalContent.appendChild(landingElement);
        scrollToBottom();
    }
});
