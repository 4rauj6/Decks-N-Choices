document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
       
        document.querySelector(".telaInicial").style.display = "none";
        document.querySelector(".telaJogo").style.display = "block";

        
        document.body.classList.add("bgJogo");
    }
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("emailUser");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
