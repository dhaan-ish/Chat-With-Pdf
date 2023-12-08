from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__, static_url_path='/static')

API_URL = "https://api-inference.huggingface.co/models/wizzseen/Chatbot-peter"
HEADERS = {"Authorization": "Bearer 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"}

def query(payload):
    response = requests.post(API_URL, headers=HEADERS, json={"inputs": payload})
    return response.json()

@app.route("/")
def index():
    # Render the HTML template for the index route
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.json.get("user_input", "")
    print(user_input)
    output = query(user_input)
    print(output)
    return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)
