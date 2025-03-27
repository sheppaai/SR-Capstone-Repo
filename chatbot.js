let chatHistory = []; // To keep track of conversation
let currentScenario = 0; // Start at the beginning
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const newScenarioBtn = document.getElementById('new-scenario-btn');

// Predefined responses
const responses = {
  "yes": "Great! Let's get started!",
  "no": "Alright, feel free to come back anytime if you change your mind.",
  "delete the email": "Good choice. It's best to delete suspicious emails like that.",
  "ignore the email": "That could be risky, it's best not to ignore such emails. Always double-check.",
  "click the link to pay the fine": "That’s a big mistake! It’s a scam. Never click on links in suspicious emails.",
  "block": "That’s a good move. You don’t want to share personal information with strangers.",
  "ignore": "That’s a safe option, especially if you're unsure of the stranger's intentions.",
  "respond": "Be cautious when responding to strangers, but if you feel comfortable, ask them why they’re messaging you.",
  "confirm": "Great, it's always best to confirm with your bank directly if you're unsure about a transaction.",
  "ignore": "You might want to reach out to your bank directly to confirm, just in case."
};

// Function to display messages
function displayMessage(message, sender = 'bot') {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Keep chat scrolled to the bottom
}

// Function to submit user response and get a reply from the chatbot (predetermined responses)
function submitResponse() {
  const userMessage = userInput.value.trim().toLowerCase();
  if (userMessage === "") return;

  // Display user message
  displayMessage(userMessage, 'user');

  // Get the predefined response based on user input
  const botResponse = responses[userMessage] || "Sorry, I don't understand that. Please try again.";
  
  // Display bot response
  displayMessage(botResponse, 'bot');
  
  // Move to the next scenario based on the current scenario
  switch (currentScenario) {
    case 1:
      currentScenario = 2; // Move to next scenario after the first one
      break;
    case 2:
      currentScenario = 3; // Move to next scenario after the second one
      break;
    case 3:
      currentScenario = 0; // End of scenarios
      break;
    default:
      currentScenario = 0; // Default to end if something goes wrong
      break;
  }

  userInput.value = ""; // Clear the input box
}

// Function to reset and start a new scenario when button is pressed
newScenarioBtn.addEventListener('click', () => {
  currentScenario = (currentScenario % 3) + 1; // Move to the next scenario, looping back to 1 after 3
  chatbox.innerHTML = '';
  userInput.value = '';
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

// Start the greeting scenario immediately
window.onload = function () {
  startGreetingScenario();
};

// Start Greeting Scenario to ask if the user wants to run through a scenario
function startGreetingScenario() {
  displayMessage("Hello! Would you like to run through a scenario to test your responses?", 'bot');
  displayMessage("Type 'yes' to start or 'no' if you'd prefer to exit.", 'bot');
}

// Functions to start each scenario
function startEmailScamScenario() {
  displayMessage("Scenario 1: You received an email claiming your account will be shut down unless you pay a fine.", 'bot');
  displayMessage("What will you do? Choose: 'delete the email', 'ignore the email', or 'click the link to pay the fine'.", 'bot');
}

function startFacebookStrangerScenario() {
  displayMessage("Scenario 2: A stranger messages you on Facebook asking personal questions.", 'bot');
  displayMessage("What will you do? Choose: 'block', 'ignore', or 'respond'.", 'bot');
}

function startLegitBankEmailScenario() {
  displayMessage("Scenario 3: You received a legit email from your bank asking if you were trying to buy something for $100.", 'bot');
  displayMessage("What will you do? Choose: 'confirm' or 'ignore'.", 'bot');
}
