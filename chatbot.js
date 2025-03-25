let chatHistory = []; // To keep track of conversation
let currentScenario = 0; // Start at the beginning
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const newScenarioBtn = document.getElementById('new-scenario-btn');

// Function to display messages
function displayMessage(message, sender = 'bot') {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Keep chat scrolled to the bottom
}

// Function to submit user response and get a reply from the AI
async function submitResponse() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Display user message
  displayMessage(userMessage, 'user');

  // Call AI API to get a response based on the user input
  const aiReply = await getAIResponse(userMessage);

  // Display AI response
  displayMessage(aiReply, 'bot');

  // Move to the next scenario based on the AI's message
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
