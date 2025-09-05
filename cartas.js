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
    const usernameClick = document.getElementById('username').value.trim();
    const senhaClick = document.getElementById('senhaUser').value.trim();
    const emailClick = document.getElementById('emailUser').value.trim();

    if(!usernameClick || !senhaClick || !emailClick){
        showBox('Preencha todos os dados por favor', 'erro', 1500);
        return; // não salva nem redireciona
    }

    const novoUser = {
        username: usernameClick,
        senha: senhaClick,
        email: emailClick,
    };

    let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado")) || [];
    usuarioCadastrado.push(novoUser);
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuarioCadastrado));

    showBox('Conta criada com sucesso! Bem-vindo(a) ' + usernameClick, 'sucesso', 1500);

    setTimeout(() => {
        window.location.href = "login_cartas.html";
    }, 1600);
});
