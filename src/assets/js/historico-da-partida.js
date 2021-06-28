let partidaSelecionada = JSON.parse(localStorage.getItem("partidaSelecionada"));
let historico = JSON.parse(localStorage.getItem("historico"));
let div = document.createElement("div");
let preencher = document.getElementById("preencher");
let label = document.createElement("label");
const fillConjuntoCentral = () => {
  let elemento;
  historico.forEach((e) => {
    if (e.dataPartida === partidaSelecionada) {
      elemento = e;
    }
  });
  let data = elemento.dataPartida;
  div.setAttribute("id", "data");
  label.append(data);
  div.append(label);
  preencher.append(div);
  let flexContainer = document.createElement("div");
  flexContainer.setAttribute("class", "flex-container");
  elemento.sorteio.forEach((time) => {
    let flexItem = document.createElement("div");
    flexItem.setAttribute("class", "flex");
    flexItem.innerHTML += `<p>${time.nome}</p>`
    let nivelTotal = 0;
    time.jogadores.forEach((jogador) => {
      let p = document.createElement("p");
      p.append(jogador.nome);
      flexItem.append(p);
      nivelTotal += parseInt(jogador.nivel)
    });
    flexItem.innerHTML += `<p>Nível: ${nivelTotal}</p>`;
    flexContainer.append(flexItem);
  });
  preencher.append(flexContainer);
};

let usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");

document
  .querySelector(".botao-sortear")
  .addEventListener("click", function (e) {
    if (usuarioCorrenteJSON) window.location.href = "./home-com-sidebar.html";
    else window.location.href = "./index.html";
  });

  document.querySelector(".botao-excluir").addEventListener("click", function (e){
    historico = historico.filter(function (element) {
        return element.dataPartida != partidaSelecionada
    })
    localStorage.setItem('historico', JSON.stringify(historico))
    window.location.href = "./historico-geral.html"
  })

document.querySelector(".botao-voltar").addEventListener("click", function(e){
window.location.href = "./historico-geral.html"
})


