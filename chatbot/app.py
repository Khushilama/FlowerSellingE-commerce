from flask import Flask, render_template, jsonify, request
from flask_cors import CORS  # Import CORS
from dotenv import load_dotenv
import os

from happybot.data_ingest import ingestdata
from happybot.data_generation import generation

app = Flask(__name__)

# Allow CORS for all routes and origins
CORS(app)

# Load environment variables
load_dotenv()

# Initialize the chatbot chain
vstore = ingestdata("done")
chain = generation(vstore)

@app.route("/")
def index():
    return render_template('chat.html')

# Handle POST requests to /get
@app.route("/get", methods=["POST"])
def chat():
    data = request.json  # Receive JSON payload from React
    if not data or 'msg' not in data:
        return jsonify({"error": "No message provided"}), 400

    input_text = data['msg']
    
    # Invoke chatbot chain to get a response
    result = chain.invoke(input_text)
    
    # Print result for debugging
    print("Response:", result)
    
    # Return the result as a JSON response
    return jsonify({"response": result})

if __name__ == '__main__':
    app.run(debug=True)
