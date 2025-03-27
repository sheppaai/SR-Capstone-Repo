from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os
from key import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY  # Set the API key for OpenAI

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Serve chatbot.html from the root directory
@app.route('/')
def index():
    return send_from_directory(os.getcwd(), 'chatbot.html')

# Serve static files (CSS, JS, images)
@app.route('/<path:filename>')
def serve_static_files(filename):
    return send_from_directory(os.getcwd(), filename)

# OpenAI Chatbot Function
def get_openai_response(prompt):
    try:
        # Use the correct endpoint for chat-based models (v1/chat/completions)
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",  # Specify the model
            messages=[  # Define the system and user context
                {"role": "system", "content": "You are a helpful chatbot."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=150,
            temperature=0.7,
        )
        # Extract the content of the response
        return response.choices[0].message.content.strip()
    except Exception as e:
        return str(e)

# Chat Route
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    scenario_context = data.get('scenario', '')  # Get scenario context

    if user_message:
        full_prompt = f"Scenario: {scenario_context}\nUser: {user_message}"
        response = get_openai_response(full_prompt)
        return jsonify({'reply': response})

    return jsonify({'reply': 'Error: No message received.'})

if __name__ == '__main__':
    app.run(debug=True)