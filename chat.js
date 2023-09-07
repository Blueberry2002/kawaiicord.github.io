document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    // Load saved messages from local storage
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

    // Display saved messages
    savedMessages.forEach((message) => {
        displayMessage(message);
    });

    sendButton.addEventListener("click", () => {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            const message = {
                text: messageText,
                timestamp: new Date().toLocaleTimeString(),
            };

            // Save the message to local storage
            savedMessages.push(message);
            localStorage.setItem("chatMessages", JSON.stringify(savedMessages));

            // Display the message in the chat interface
            displayMessage(message);

            messageInput.value = "";
        }
    });

    function displayMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = `[${message.timestamp}] ${message.text}`;
        messagesContainer.appendChild(messageElement);
    }
});
