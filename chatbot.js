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

// AI API Call function to get the AI's response based on user input
async function getAIResponse(userMessage) {
  const apiKey = "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"; // Replace with your actual OpenAI API key
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const prompt = `User: ${userMessage}\nBot:`;  // Prompt the bot with user's message

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // or whichever model you're using
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100,
      }),
    });

    // Check if the response is okay (status 200)
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // Check if there is a valid response from OpenAI
    if (data.choices && data.choices.length > 0) {
      const botReply = data.choices[0].message.content;
      return botReply;  // Return the AI's response
    } else {
      throw new Error('No choices received from API');
    }
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return `Sorry, something went wrong with the AI: ${error.message}`;  // Handle errors
  }
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
