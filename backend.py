from flask import Flask, request, jsonify
import openai
from key import OPENAI_API_KEY  # Import API key from key.py

app = Flask(__name__)

openai.api_key = OPENAI_API_KEY  # Set OpenAI API key

def get_openai_response(prompt):
    try:
        response = openai.Completion.create(
            engine="gpt-3.5-turbo",
            prompt=prompt,
            max_tokens=150,
            n=1,
            stop=None,
            temperature=0.7,
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return str(e)

@app.route('/chat', methods=['POST'])  # Change method to POST for better handling of data
def chat():
    user_message = request.json.get('message')  # Get message from JSON payload

    if user_message:
        response = get_openai_response(user_message)
        return jsonify({'reply': response})
    return jsonify({'reply': 'Error: No message received.'})

if __name__ == '__main__':
    app.run(debug=True)