let chatHistory = []; // To keep track of conversation
let currentScenario = 0; // Start at the beginning
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const newScenarioBtn = document.getElementById('new-scenario-btn');

function displayMessage(message, sender = 'bot') {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // Keep chat scrolled to the bottom
}

function submitResponse() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Display user message
  displayMessage(userMessage, 'user');

  // Process the response based on current scenario
  switch (currentScenario) {
    case 0:
      handleGreeting(userMessage);
      break;
    case 1:
      handleEmailScamScenario(userMessage);
      break;
    case 2:
      handleFacebookStrangerScenario(userMessage);
      break;
    case 3:
      handleLegitBankEmailScenario(userMessage);
      break;
    default:
      displayMessage("I'm sorry, I didn't understand that.", 'bot');
  }

  userInput.value = ""; // Clear the input box
}

// Function for the greeting scenario (initial ask to try scenarios)
function handleGreeting(userMessage) {
  if (userMessage.toLowerCase() === 'yes') {
    displayMessage("Great! Let's start with the first scenario.", 'bot');
    currentScenario = 1; // Start Scenario #1
    startEmailScamScenario(); // Begin Scenario 1
  } else if (userMessage.toLowerCase() === 'no') {
    displayMessage("If you do not want to try out a scenario, please exit the screen.", 'bot');
    currentScenario = 0; // Stay in greeting loop
  } else {
    displayMessage("Please type 'yes' to start a scenario or 'no' to exit.", 'bot');
  }
}

// Scenario 1: Suspicious Email (Scam)
async function handleEmailScamScenario(userMessage) {
  if (userMessage.toLowerCase().includes("delete")) {
    displayMessage("Good choice! Deleting the email is often the safest option when you're unsure.", 'bot');
    currentScenario = 2; // Move to next scenario
  } else if (userMessage.toLowerCase().includes("ignore")) {
    displayMessage("Ignoring the email might be an option, but deleting it is safer.", 'bot');
    currentScenario = 2; // Move to next scenario
  } else if (userMessage.toLowerCase().includes("pay") || userMessage.toLowerCase().includes("click")) {
    displayMessage("Not a good idea! Scammers try to trick you into paying or clicking malicious links.", 'bot');
    currentScenario = 2; // Move to next scenario
  } else {
    displayMessage("Please choose one of the following: 'delete', 'ignore', or 'click link'.", 'bot');
  }
}

// Scenario 2: Stranger Messaging on Facebook
async function handleFacebookStrangerScenario(userMessage) {
  if (userMessage.toLowerCase().includes("block")) {
    displayMessage("Excellent! Blocking the stranger is a safe option. You can also report them if needed.", 'bot');
    currentScenario = 3; // Move to next scenario
  } else if (userMessage.toLowerCase().includes("ignore")) {
    displayMessage("Ignoring the message is an option, but blocking the stranger prevents further contact.", 'bot');
    currentScenario = 3; // Move to next scenario
  } else if (userMessage.toLowerCase().includes("respond")) {
    displayMessage("Responding to a stranger online can be risky, especially if they ask personal questions.", 'bot');
    currentScenario = 3; // Move to next scenario
  } else {
    displayMessage("Please choose one of the following: 'block', 'ignore', or 'respond'.", 'bot');
  }
}

// Scenario 3: Legit Email from the Bank
async function handleLegitBankEmailScenario(userMessage) {
  if (userMessage.toLowerCase().includes("confirm")) {
    displayMessage("That's correct! If you made the purchase, confirm it with your bank. Never share your password or pin.", 'bot');
    currentScenario = 0; // End of scenarios
  } else if (userMessage.toLowerCase().includes("ignore")) {
    displayMessage("Ignoring the email could lead to missed opportunities. If it's a legitimate email, you should confirm the transaction.", 'bot');
    currentScenario = 0; // End of scenarios
  } else {
    displayMessage("Please choose one of the following: 'confirm' or 'ignore'.", 'bot');
  }
}

// AI API Call function (OpenAI GPT-3 example)
async function getAIResponse(userMessage) {
  const apiKey = "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"; // Insert your OpenAI API key here
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const prompt = `User: ${userMessage}\nBot:`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;
    return botReply;
  } catch (error) {
    return "Sorry, something went wrong with the AI. Try again later.";
  }
}

// Function to reset and start new scenario when button is pressed
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
window.onload = function() {
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
