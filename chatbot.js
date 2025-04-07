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
    currentScenario = (currentScenario % 10) + 1;  // Cycle through scenarios
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
            displayMessage("Scenario 2: A stranger messages you on Facebook asking very personal questions.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 3:
            displayMessage("Scenario 3: A friend sends you a link in a private message on social media, saying it's a funny video. When you click it, it asks you to enter your password to view the content.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 4:
            displayMessage("Scenario 4: While browsing online, you get a pop-up ad that says your security software is out of date and needs an urgent update. The message looks official, but some words are misspelled.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 5:
            displayMessage("Scenario 5: A website offers a free prize for filling out a survey. All you need to do is enter your credit card information to claim your prize.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 6:
            displayMessage("Scenario 6: You receive a phone call from someone claiming to be from Microsoft, saying your computer has a virus and they need remote access to fix it.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 7:
            displayMessage("Scenario 7: You meet someone online through a dating site. After a few weeks of chatting, they start expressing strong feelings for you, but then they say they need money urgently for a personal emergency and ask if you can send them some.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 8:
            displayMessage("Scenario 8: You receive a phone call from a charity you've donated to in the past, asking if you'd like to contribute again. The caller is polite, and they can answer any questions about their mission and funding use.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 9:
            displayMessage("Scenario 9: You receive an email from an online store you have used before. It is confirming the shipping of an item you just purchased, and the tracking number is valid. You also see the stores contact information and address at the bottom.", "bot");
            displayMessage("What will you do?", "bot");
            break;
        case 10:
            displayMessage("Scenario 10: You receive a text message from your internet provider informing you of an upcoming service update. It includes a link to their official website where you can find more information.", "bot");
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
            return "A stranger messages you on Facebook asking very personal questions.";
        case 3:
            return "A friend sends you a link in a private message on social media, saying it's a funny video. When you click it, it asks you to enter your password to view the content.";
        case 4:
            return "While browsing online, you get a pop-up ad that says your security software is out of date and needs an urgent update. The message looks official, but some words are misspelled.";
        case 5:
            return "A website offers a free prize for filling out a survey. All you need to do is enter your credit card information to claim your prize.";
        case 6:
            return "You receive a phone call from someone claiming to be from Microsoft, saying your computer has a virus and they need remote access to fix it.";
        case 7:
            return "You meet someone online through a dating site. After a few weeks of chatting, they start expressing strong feelings for you, but then they say they need money urgently for a personal emergency and ask if you can send them some.";
        case 8:
            return "You receive a phone call from a charity you've donated to in the past, asking if you'd like to contribute again. The caller is polite, and they can answer any questions about their mission and funding use.";
        case 9:
            return "You receive an email from an online store you have used before. It is confirming the shipping of an item you just purchased, and the tracking number is valid. You also see the stores contact information and address at the bottom.";
        case 10:
            return "You receive a text message from your internet provider informing you of an upcoming service update. It includes a link to their official website where you can find more information.";
        default:
            return "General conversation.";  // Fallback if no scenario is set
    }
}