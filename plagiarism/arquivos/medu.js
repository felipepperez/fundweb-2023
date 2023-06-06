
        function sendMessage() {
       
            var message = document.getElementById("input-group").value;

            if (message !== "") {
            
                var messageElement = document.createElement("p");
                messageElement.innerText = message;
                
                document.getElementById("input-group").appendChild(messageElement);

                document.getElementById("messageInput").value = "";
            }
        }
  
        
