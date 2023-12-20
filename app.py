from gradio_client import Client
from flask import Flask, render_template, request, jsonify

client = Client("https://5642b7c4782b646128.gradio.live/")

app = Flask(__name__, static_url_path='/static')

def query(payload):
    result = client.predict(payload, api_name="/predict")
    return result

@app.route("/")
def index():
    # Render the HTML template for the index route
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.json.get("user_input", "")
    print(user_input)
    
    # Use Gradio client to get the response
    output = query(user_input)
    print(output)
    print(str(output))
    return str(output)

if __name__ == "__main__":
    app.run(debug=True)
