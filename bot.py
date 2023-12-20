from gradio_client import Client

client = Client("https://5642b7c4782b646128.gradio.live/")
result = client.predict(
		"Hello!!",	# str  in 'text' Textbox component
							api_name="/predict"
)
print(result)