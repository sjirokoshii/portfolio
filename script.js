document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = ["hello, ", "athierah", " here", "🎧"];
    let i = 0;
    let j = 0;
    const speed = 100; // Speed in milliseconds
    const typewriterElement = document.getElementById("typewriter");

    function typeWriter() {
        if (i < typewriterText[j].length) {
            // Add characters one by one
            if (j === 1) {
                // Highlighted part
                typewriterElement.innerHTML += `<span class='highlight'>${typewriterText[j].charAt(i)}</span>`;
            } else {
                typewriterElement.innerHTML += typewriterText[j].charAt(i);
            }
            i++;
            setTimeout(typeWriter, speed);
        } else if (j < typewriterText.length - 1) {
            // Move to the next part
            j++;
            i = 0;
            setTimeout(typeWriter, speed);
        } else {
            // Remove the cursor once typing is complete
            typewriterElement.style.borderRight = 'none';
        }
    }

    typeWriter();
});

document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        document.getElementById('digital-clock').textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the clock immediately
});
