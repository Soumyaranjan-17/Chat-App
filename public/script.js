// public/script.js

const socket = io();

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
});

socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});
