// chatbot.js - ADSphere Custom Chatbot

document.addEventListener("DOMContentLoaded", function () {
    const chatbotIcon = document.createElement("div");
    chatbotIcon.id = "chatbot-icon";
    chatbotIcon.innerHTML = "💬<span id='notification-dot'></span>";
    document.body.appendChild(chatbotIcon);

    const chatbotBox = document.createElement("div");
    chatbotBox.id = "chatbot";
    chatbotBox.innerHTML = `
        <div class="chat-header">
            ADSphere Chatbot
            <button id="minimize-btn">_</button>
            <button id="close-btn">X</button>
        </div>
        <div class="chat-body" id="chat-body">
            <p class='bot-message'>Welcome! How can I assist you?</p>
            <div class="suggestions">
                <button class="suggestion">What services do you offer?</button>
                <button class="suggestion">How can I contact support?</button>
                <button class="suggestion">What are your prices?</button>
            </div>
        </div>
        <div class="chat-footer">
            <input type="text" id="chat-input" placeholder="Type your message..." />
            <button id="send-btn">Send</button>
        </div>
    `;
    document.body.appendChild(chatbotBox);

    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const minimizeBtn = document.getElementById("minimize-btn");
    const closeBtn = document.getElementById("close-btn");
    const chatbotIconElement = document.getElementById("chatbot-icon");
    const notificationDot = document.getElementById("notification-dot");

    const responses = {
        "hi": "Hey there! How can I help you?",
        "hello": "Hello! Need assistance?",
        "services": "We offer digital marketing, social media growth, and brand awareness.",
        "pricing": "Our pricing varies based on your needs. Contact us for details!",
        "contact": "You can reach us via email at support@adsphere.com.",
        "bye": "Goodbye! Have a great day!",
    };

    function addMessage(sender, message) {
        const msgDiv = document.createElement("p");
        msgDiv.classList.add(sender === "You" ? "user-message" : "bot-message");
        msgDiv.textContent = message;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showNotification() {
        notificationDot.style.display = "block";
    }

    function hideNotification() {
        notificationDot.style.display = "none";
    }

    sendBtn.addEventListener("click", function () {
        const userMessage = chatInput.value.toLowerCase().trim();
        if (!userMessage) return;
        addMessage("You", userMessage);
        chatInput.value = "";
        
        setTimeout(() => {
            if (responses[userMessage]) {
                addMessage("Chatbot", responses[userMessage]);
            } else {
                addMessage("Chatbot", "Sorry, I didn't understand that. Try asking something else.");
            }
            showNotification();
        }, 500);
    });

    minimizeBtn.addEventListener("click", function () {
        chatbotBox.classList.toggle("minimized");
    });

    closeBtn.addEventListener("click", function () {
        chatbotBox.style.display = "none";
        showNotification();
    });

    chatbotIconElement.addEventListener("click", function () {
        chatbotBox.style.display = "block";
        hideNotification();
    });
});
