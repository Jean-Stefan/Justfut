let db_usuarios_inicial = {
  "usuarios": [
  ]
};

let db = JSON.parse(localStorage.getItem("db_usuario"));

if (!db) {
  db = db_usuarios_inicial;
}

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function insereUsuario(usuario) {
  let novoUsuario = {
    id: generateUUID(),
    login: usuario.login,
    senha: usuario.senha,
    nome: usuario.nome,
    nascimento: usuario.nascimento,
    genero: usuario.genero,
    estado: usuario.estado,
    altura: usuario.altura,
    nivel: usuario.nivel,
  };

  // Insere o novo objeto no array
  db.usuarios.push(novoUsuario);
  alert("Usuário criado com sucesso.");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_usuario", JSON.stringify(db));
}

const form = document.querySelector("#formulario")

form.addEventListener("submit", function recebeEventoForm(evento){

    evento.preventDefault()

    // Obtem os valores dos campos do formulário
    let campoUsuario = form.querySelector("#usuario").value
    let campoSenha = form.querySelector("#senha").value
    let campoNome = form.querySelector("#nome").value
    let campoNascimento = form.querySelector("#dt_nasc").value
    let campoGenero = form.querySelector("#genero").value
    let campoEstado = form.querySelector("#estado").value
    let campoAltura = form.querySelector("#altura").value
    let campoNivel = form.querySelector("#nivel").value
    let usuario = {
      login: campoUsuario,
      senha: campoSenha,
      nome: campoNome,
      nascimento: campoNascimento,
      genero: campoGenero,
      estado: campoEstado,
      altura: campoAltura,
      nivel: campoNivel
    };

    insereUsuario(usuario);

    // Limpa o formulario
    form.reset();

    window.location.href = 'login.html';

  });