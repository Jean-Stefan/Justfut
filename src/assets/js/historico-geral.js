const historico = JSON.parse(localStorage.getItem("historico")) || [];
const divDeData = document.getElementById("datas");

function criarDivDeData(data = new Date()) {
  const div = document.createElement("div");
  const a = document.createElement("a");
  a.href = "./historico-da-partida.html";
  div.classList.add("data-item");
  let ano, mes, dia;
  ano = data.getUTCFullYear()
  mes = data.getUTCMonth() + 1 < 10 ? `0${data.getUTCMonth() + 1}` : data.getUTCMonth() + 1
  dia = data.getUTCDate() + 1 < 10 ? `0${data.getUTCDate()}` : data.getUTCDate()
    a.setAttribute('id',`${ano}-${mes}-${dia}`);
  a.append(
    `${data.getUTCDate()}/${data.getUTCMonth() + 1}/${data.getUTCFullYear()}`
  );
  const idAtual = (id) => {
    JSON.parse(localStorage.setItem("partidaSelecionada", JSON.stringify(id)))
    
}
  a.addEventListener("click", () => {
      idAtual(a.id)
  })

  div.append(a);

  return div;
}

historico.forEach((partida) => {
  divDeData.append(criarDivDeData(new Date(partida.dataPartida)));
});

let usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");

document
  .querySelector(".botao-voltar")
  .addEventListener("click", function (e) {
    if (usuarioCorrenteJSON) window.location.href = "./home-com-sidebar.html";
    else window.location.href = "./index.html";
  });