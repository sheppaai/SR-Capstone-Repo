let chatHistory = [];
let currentScenario = 0;
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const newScenarioBtn = document.getElementById("new-scenario-btn");

// Function to display messages in the chatbox
function displayMessage(message, sender = "bot") {
    const messageElement = document.createElement("div");
    messageElement.textContent = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to send user input to the backend (which will use the API key)
async function sendMessageToBackend(message) {
    try {
        const response = await fetch(`http://localhost:5000/chat?message=${encodeURIComponent(message)}`, {
            method: "POST",  // Changed to POST
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })  // Send the message in the body
        });

        const data = await response.json();
        if (data.reply) {
            displayMessage(data.reply, "bot");
        } else {
            displayMessage("Error: No reply from the bot.", "bot");
        }
    } catch (error) {
        console.error("Error:", error);
        displayMessage("Oops! Something went wrong. Try again later.", "bot");
    }
}


// Handle user input submission
function submitResponse() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    displayMessage(userMessage, "user");
    sendMessageToBackend(userMessage);
    userInput.value = "";
}

// Start new scenarios
newScenarioBtn.addEventListener("click", () => {
    currentScenario = (currentScenario % 3) + 1;
    chatbox.innerHTML = "";
    chatHistory = [];

    switch (currentScenario) {
        case 1:
            startEmailScamScenario();
            break;
        case 2:
            startFacebookStrangerScenario();
            break;
        case 3:
            startLegitBankEmailScenario();
            break;
    }
});

// Start Greeting Scenario
window.onload = function () {
    startGreetingScenario();
};

// Scenario functions
function startGreetingScenario() {
    displayMessage("Welcome to the NetWise Chatbot!", "bot");
    displayMessage("Click 'New Scenario' to test your online safety skills.", "bot");
}

function startEmailScamScenario() {
    displayMessage("Scenario 1: You received an email claiming your account will be shut down unless you pay a fine.", "bot");
    displayMessage("What will you do?", "bot");
}

function startFacebookStrangerScenario() {
    displayMessage("Scenario 2: A stranger messages you on Facebook asking personal questions.", "bot");
    displayMessage("What will you do?", "bot");
}

function startLegitBankEmailScenario() {
    displayMessage("Scenario 3: You received a legit email from your bank asking if you were trying to buy something for $100.", "bot");
    displayMessage("What will you do?", "bot");
}