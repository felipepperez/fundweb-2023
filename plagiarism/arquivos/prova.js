document.addEventListener('DOMContentLoaded', initializeChat); // Chama a função para inicializar o chat quando o documento estiver pronto

// Função para enviar mensagem no chat
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        var chatMessages = document.getElementById('chatMessages');
        var newMessage = document.createElement('div');
        newMessage.classList.add('direct-chat-msg', 'right');

        var messageInfo = document.createElement('div');
        messageInfo.classList.add('direct-chat-infos', 'clearfix');

        var messageAuthor = document.createElement('span');
        messageAuthor.classList.add('direct-chat-name', 'float-right');
        messageAuthor.textContent = 'You';

        var messageTimestamp = document.createElement('span');
        messageTimestamp.classList.add('direct-chat-timestamp', 'float-left');
        var now = new Date();
        var timestamp = now.getHours() + ':' + now.getMinutes();
        messageTimestamp.textContent = timestamp;

        messageInfo.appendChild(messageAuthor);
        messageInfo.appendChild(messageTimestamp);

        var messageText = document.createElement('div');
        messageText.classList.add('direct-chat-text');
        messageText.textContent = message;

        newMessage.appendChild(messageInfo);
        newMessage.appendChild(messageText);

        chatMessages.appendChild(newMessage);

        messageInput.value = '';
    }
}

// Função para inicializar o chat
function initializeChat() {
    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendMessage);

    var messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    });
}

