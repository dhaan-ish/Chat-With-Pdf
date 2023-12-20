const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "ChatBot";
const PERSON_NAME = "User";

msgerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const msgText = msgerInput.value;
  msgerInput.value = "";
  addChat("User", "user.png", "right", msgText);
  if (!msgText) return;

  // Send user input to the backend
  const response = await sendUserInput(msgText);

  // Process the response and add it to the chat along with user input
  handleResponse(response, msgText);

  msgerInput.value = "";
});

async function sendUserInput(userInput) {
  const response = await fetch("/get_response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_input: userInput }),
  });

  return response.text();  // Use response.text() instead of response.json()
}

function handleResponse(response, userInput) {
  // Display user's input in the chat

  if (response.startsWith("ERROR:")) {
    // Handle error response
    const errorMessage = response.replace("ERROR:", "").trim();
    addChat("ChatBot", "/static/bot.png", "left", errorMessage);
  } else {
    // Handle success response
    addChat("ChatBot", "/static/bot.png", "left", response);
  }
}

function addChat(name, img, side, text) {
  let msgHTML;
  let leftie = `
      <div style="display: flex; flex-direction: row;">
         <div class="msg-img" style="background-image: url(${img})"></div>
         <div class="msg-info">
            <div class="msg-info-name">${name}</div>
         </div>
      </div>
   `;

  let msg = `
      <div class="msg ${side}-msg">
         <div class="msg-bubble">
            <div class="msg-text">${text}</div>
         </div>
      </div>
   `;

  if (side == "right") {
    msgHTML = msg;
  } else {
    msgHTML = leftie + msg;
  }

  if (side == "right") {
    msgHTML += `<div class="msg-info-time" style="margin-left: 325px;">${formatDate(new Date())}</div>`;
  } else {
    msgHTML += `<div class="msg-info-time" style="margin-left: 45px;">${formatDate(new Date())}</div>`;
  }

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}

// The rest of your existing JS code...
