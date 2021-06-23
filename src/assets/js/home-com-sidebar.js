// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login   
let usuarioCorrente= {};

usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
   if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
  }


if (!usuarioCorrente.login) {
    alert("Você precisa fazer login antes de continuar.")
    window.location.href = "login.html";
}

document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;


function logoutUser() {
  usuarioCorrente = {};
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
  window.location.href = "login.html";
}

document.querySelector("#botao-sair").addEventListener("click", function (e) {
  logoutUser();
});