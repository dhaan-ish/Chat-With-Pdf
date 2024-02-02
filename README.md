# Speak-To-Pdf

## Overview
Speak-To-Pdf is a project that utilizes Gradio for real-time conversational interaction with a machine learning model deployed on a server. It allows users to input text queries and receive responses from the model. The project also includes functionality to convert the conversation into a PDF document.

## Installation
To run Speak-To-Pdf, you can set up the environment using either a virtual environment or by installing the dependencies listed in the requirements.txt file.

### Using Virtual Environment
```bash

# Activate the virtual environment
  
venv\Scripts\activate
```
###  Install dependencies
```bash
pip install -r requirements.txt
```
## Usage

After setting up the environment, you need to update the Client instantiation in the app.py file with the appropriate server URL. This URL can be obtained after running the ChatBot.ipynb notebook either locally or in Google Colab.

```python
client = Client("<Link from the .ipynb file>")

Once the Client is updated, you can start the Flask server by running:
```
```python
python app.py
```
This will start the server, and you can access the application by navigating to http://localhost:5000 in your web browser.

## Conversational Interaction

- Input text queries in the provided text box.
- Click on the submit button or press enter to send the query.
- The model will generate a response, which will be displayed on the screen.


## Contributing

Contributions to Speak-To-Pdf are welcome. If you have any ideas, suggestions, or bug fixes, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.
