document.addEventListener("keydown", function(event){
    if(event.code === "Space"){
        event.preventDefault();
        document.querySelector(".telaInicial").style.display = "none";
        document.querySelector(".click").style.display = "none";
        document.querySelector(".telaJogo").style.display = "block";
        document.querySelector(".img").style.display = "block";
    }
});
