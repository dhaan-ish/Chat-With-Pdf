import requests

API_URL = "https://api-inference.huggingface.co/models/wizzseen/Chatbot-peter"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output=query("what is 911")
print(output)