import requests
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

API_URL = "https://api-inference.huggingface.co/models/wizzseen/Chatbot-peter"
HEADERS = {"Authorization": f"Bearer {os.getenv('HF_API_KEY')}"}


def query(payload):
	response = requests.post(API_URL, headers=HEADERS, json=payload)
	return response.json()
	
output=query("what is 911")
print(output)
