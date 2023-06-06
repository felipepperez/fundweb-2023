window.addEventListener('load', () => {
    let side = 0;

    const leftTemplate = document.querySelector("#leftSide");
    const rigthTemplate = document.querySelector("#rightSide");

    const messages = document.querySelector("#messages");

    messages.scrollTop = messages.scrollHeight - messages.clientHeight;

    document.querySelector('#btnMessage').addEventListener('click', () => {
        const message = document.querySelector('#message').value;
        if (message) {
            side = 1 - side;
            
            let clone;
            if (side) {
                clone = leftTemplate.content.cloneNode(true);
            } else {
                clone = rigthTemplate.content.cloneNode(true);
            }

            clone.querySelector('.direct-chat-text').innerText=message;
        
            const time = moment();
            
            clone.querySelector('.direct-chat-timestamp').innerText=time.format("D MMM h:mm a");

            messages.appendChild(clone);

            messages.scrollTop = messages.scrollHeight - messages.clientHeight;

            document.querySelector('#message').value = '';
        }
    })
});