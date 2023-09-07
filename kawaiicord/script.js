// JavaScript code for chat functionality
const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Function to add a message to the chat
function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.textContent = `${sender}: ${message}`;
    messagesContainer.appendChild(messageElement);
    // Save the message in local storage
    saveMessage(sender, message);
}

sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
        addMessage("You", messageText);
        messageInput.value = "";
    }
});

// Function to save a message in local storage
function saveMessage(sender, message) {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push({ sender, message });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

// Function to load chat messages from local storage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.forEach(({ sender, message }) => {
        addMessage(sender, message);
    });
}

// Load chat messages when the page loads
window.addEventListener("load", () => {
    loadMessages();
});
