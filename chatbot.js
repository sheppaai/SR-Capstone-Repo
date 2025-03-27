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
        // Include the current scenario in the request
        const scenarioContext = getScenarioContext();  // Get the current scenario's context

        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: message,
                scenario: scenarioContext  // Send scenario info to the backend
            }),
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

// Function to handle user input submission
function submitResponse() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return; // Prevent submitting empty messages

    displayMessage(userMessage, "user");
    sendMessageToBackend(userMessage);
    userInput.value = ""; // Clear the input box
}

// Start new scenarios when the button is clicked
newScenarioBtn.addEventListener("click", () => {
    currentScenario = (currentScenario % 3) + 1;  // Cycle through scenarios
    chatbox.innerHTML = "";  // Clear the chatbox
    chatHistory = [];  // Reset the chat history

    // Start the selected scenario
    startScenario();
});

// Function to display the selected scenario
function startScenario() {
    switch (currentScenario) {
        case 1:
            displayMessage("Scenario 1: You received an email claiming your account will be shut down unless you pay a fine.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 2:
            displayMessage("Scenario 2: A stranger messages you on Facebook asking personal questions.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 3:
            displayMessage("Scenario 3: You received a legit email from your bank asking if you were trying to buy something for $100.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        default:
            displayMessage("Welcome to the NetWise Chatbot!", "bot");
            displayMessage("Click New Scenario to get started!", "bot")
            break;
    }
}

// Scenario functions are being replaced by the above switch-case in startScenario

// Start Greeting Scenario on page load
window.onload = function () {
    startScenario();  // Display initial greeting or first scenario
};

// Function to get the scenario context based on currentScenario
function getScenarioContext() {
    switch (currentScenario) {
        case 1:
            return "You received an email claiming your account will be shut down unless you pay a fine.";
        case 2:
            return "A stranger messages you on Facebook asking personal questions.";
        case 3:
            return "You received a legit email from your bank asking if you were trying to buy something for $100.";
        default:
            return "General conversation.";  // Fallback if no scenario is set
    }
}