let db_usuario = {};

let usuariosJSON = localStorage.getItem("db_usuario");

db_usuario = JSON.parse(usuariosJSON);

// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login
let usuarioCorrente = {};

usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
if (usuarioCorrenteJSON) {
  usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
}

if (!usuarioCorrente.login) {
  alert("Você precisa fazer login antes de continuar.");
  window.location.href = "login.html";
}

const campoNome = document.getElementById("nome");
const campoNascimento = document.getElementById("dt_nasc");
const campoGenero = document.getElementById("genero");
const campoEstado = document.getElementById("estado");
const campoAltura = document.getElementById("altura");
const campoNivel = document.getElementById("nivel");

document.querySelector("#botao-editar").addEventListener("click", function (e) {
  campoNome.value = usuarioCorrente.nome;
  campoNascimento.value = usuarioCorrente.nascimento;
  campoGenero.value = usuarioCorrente.genero;
  campoEstado.value = usuarioCorrente.estado;
  campoAltura.value = usuarioCorrente.altura;
  campoNivel.value = usuarioCorrente.nivel;
});

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function recebeEventoForm(evento) {
  evento.preventDefault();

  updateUsuario(usuarioCorrente.id);

  formulario.reset();
});

function updateUsuario(id) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db_usuario.usuarios.map((obj) => obj.id).indexOf(id);

  let usuario = db_usuario.usuarios[index];

  // Altera os dados do objeto no array
  (usuario.nome = campoNome.value),
    (usuario.nascimento = campoNascimento.value),
    (usuario.genero = campoGenero.value),
    (usuario.estado = campoEstado.value),
    (usuario.altura = campoAltura.value),
    (usuario.nivel = campoNivel.value);

  alert("Contato alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_usuario", JSON.stringify(db_usuario));

  // Altera os dados do usuário no Session Storage
  usuarioCorrente.nome = usuario.nome;
  usuarioCorrente.nascimento = usuario.nascimento;
  usuarioCorrente.genero = usuario.genero;
  usuarioCorrente.estado = usuario.estado;
  usuarioCorrente.altura = usuario.altura;
  usuarioCorrente.nivel = usuario.nivel;

  // Atualiza os dados no Session Storage
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
  usuarioCorrente = {};
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
  window.location.href = "login.html";
}

document.querySelector("#botao-sair").addEventListener("click", function (e) {
  logoutUser();
});
