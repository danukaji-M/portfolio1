const textToType = "HELLO I AM A WEB DEVELOPER";

const typingSpeed = 80; // Adjust typing speed (in milliseconds) here

const typingContainer = document.getElementById("autotype");
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
    typingContainer.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
    }
}

typeText(); 
