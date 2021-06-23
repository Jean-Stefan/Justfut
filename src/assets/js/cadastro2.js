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
    let campoPeso = form.querySelector("#peso").value
    let usuario = {
      login: campoUsuario,
      senha: campoSenha,
      nome: campoNome,
      nascimento: campoNascimento,
      genero: campoGenero,
      estado: campoEstado,
      altura: campoAltura,
      peso: campoPeso
    };

    insereUsuario(usuario);

    // Limpa o formulario
    form.reset();

    window.location.href = 'login.html';

  });