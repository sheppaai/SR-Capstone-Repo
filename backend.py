from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS  # Import CORS
import os
import openai
from key import OPENAI_API_KEY  # Import the key from the key.py file

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
    return send_from_directory(os.getcwd(), filename)  # Serve static files

# OpenAI Chatbot Function
def get_openai_response(prompt):
    try:
        # Use openai.ChatCompletion.create to get the chat response
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Specify the model
            messages=[  # Define the system and user context
                {"role": "system", "content": "You are a helpful chatbot."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=150,
            temperature=0.7,
        )
        # Correctly extract the content from the response
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        return str(e)

# Chat Route
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')  # Get message from JSON payload

    if user_message:
        response = get_openai_response(user_message)
        return jsonify({'reply': response})
    
    return jsonify({'reply': 'Error: No message received.'})

if __name__ == '__main__':
    app.run(debug=True)