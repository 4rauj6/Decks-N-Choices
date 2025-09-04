const mensagens = document.getElementById("mensagem");
const overlay = document.getElementById("overlayAni");
const mensagemImg = document.getElementById("wrong");
const mensagemTexto = document.getElementById("mensagemText");

function showBox(text, tipo='sucesso', tempo=1000){
    mensagemTexto.textContent = text;

    if(tipo === 'erro'){
        mensagemImg.src = '8631570.png'; 
        mensagemImg.style.display = 'block';
    } else if(tipo === 'sucesso'){
        mensagemImg.src = '14441011.png'; 
        mensagemImg.style.display = 'block';
    } else {
        mensagemImg.style.display = 'none';
    }

    mensagens.className = `mensagemBox ${tipo} ativo`;
    overlay.classList.add('show');

    setTimeout(() => {
        mensagens.classList.remove('ativo');
        overlay.classList.remove('show');
    }, tempo);
}

document.querySelector(".submit").addEventListener("click", function(e){
    e.preventDefault();
    const usernameClick = document.getElementById('username').value;
    const senhaClick = document.getElementById('senhaUser').value;
    const emailClick = document.getElementById('emailUser').value;

    if(!usernameClick || !senhaClick || !emailClick){
        showBox('Preencha todos os dados por favor', 'erro');
    } else {
        showBox('Conta criada com sucesso! Bem-vindo(a) ' + usernameClick, 'sucesso');

        window.location.href = "login_cartas.html";
    }

});
