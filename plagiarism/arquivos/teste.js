// variavel global para alternancia de mensagem
// false = direita, true = esquerda
pessoa = false;

// adiciona função quando clica no botão
document.getElementById('botao-enviar-mensagem').addEventListener('click', (event) => {
    event.preventDefault();
    enviarMensagem();
});

// função de enviar mensagem
function enviarMensagem() {
    // debug lado
    if (pessoa) console.log("esquerda");
    if (!pessoa) console.log("direita");

    // debug mensagem
    let mensagem = document.getElementById('mensagem-chat').value;
    document.getElementById('mensagem-chat').value = '';
    console.log(mensagem);

    if (mensagem == '') {
        alert('Não é possível enviar uma mensagem vazia')
        return;
    }

    let divMensagem = document.createElement('div');

    // classes de acordo com quem enviou a mensagem
    if(pessoa){
        divMensagem.className = 'direct-chat-msg right';
    } else {
        divMensagem.className = 'direct-chat-msg';
    }

    let divInformacoes = document.createElement('div');
    divInformacoes.className = 'direct-chat-infos clearfix';

    let spanInfo1 = document.createElement('span');
    let spanInfo2 = document.createElement('span');
    let imagem = document.createElement('img');

    // Sarah
    if (pessoa) {
        spanInfo1.className = 'direct-chat-name float-right';
        spanInfo1.innerHTML = 'Sarah Bullock';
    
        spanInfo2.className = 'direct-chat-timestamp float-left';
        spanInfo2.innerHTML = '23 Jan 5:37 pm';
        
        imagem.className = 'direct-chat-img';
        imagem.src = 'dist/img/user3-128x128.jpg';
        imagem.alt = 'message user image';

    // Alexandre
    } else {
        spanInfo1.className = 'direct-chat-name float-left';
        spanInfo1.innerHTML = 'Alexandre Pierce';
    
        spanInfo2.className = 'direct-chat-timestamp float-right';
        spanInfo2.innerHTML = '23 Jan 5:37 pm';
    
        imagem.className = 'direct-chat-img';
        imagem.src = 'dist/img/user1-128x128.jpg';
        imagem.alt = 'message user image';
    }

    divInformacoes.appendChild(spanInfo1);
    divInformacoes.appendChild(spanInfo2);
    divMensagem.appendChild(divInformacoes);
    divMensagem.appendChild(imagem);

    let divTexto = document.createElement('div');
    divTexto.className = 'direct-chat-text';
    divTexto.innerHTML = mensagem;

    divMensagem.appendChild(divTexto);

    // adiciona mensagem no chat
    let blocoMensagens = document.getElementById('bloco-de-mensagens');
    blocoMensagens.appendChild(divMensagem);    

    // inverte quem envia a próxima mensagem
    pessoa = !pessoa;
}