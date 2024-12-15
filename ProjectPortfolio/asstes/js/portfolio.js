const words = ["Khriz", "Front End Developer", "UI/UX Designer"]; // Add more words here
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typingSpeed = 150; // Speed of typing
const erasingSpeed = 100; // Speed of erasing
const delayBetweenWords = 1000; // Delay before typing the next word

const typingElement = document.getElementById("typing");

function type() {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting) {
        // Typing logic
        typingElement.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentWord.length) {
            // Word fully typed, start erasing after a delay
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
            return;
        }
    } else {
        // Erasing logic
        typingElement.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            // Word fully erased, move to the next word
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length; // Loop back to the first word
        }
    }

    // Adjust speed based on typing or erasing
    const speed = isDeleting ? erasingSpeed : typingSpeed;
    setTimeout(type, speed);
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", type);
