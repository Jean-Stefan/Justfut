let jogadores_inicial = [];
let partida_inicial = [];
let sorteio_inicial;

let jogadores = JSON.parse(localStorage.getItem("jogadores"));
let partida = JSON.parse(localStorage.getItem("partida"));
let sorteio = JSON.parse(localStorage.getItem("sorteio"));

const campoNome = document.querySelector(".nome"); //seleciona a caixa de input: nome
const botaoAdc = document.querySelector(".adc"); // seleciona o botao: adicionar "+"
const jogadoresNaTela = document.querySelector(".jogadores"); //seleciona a lista ordenada: <ul class="jogadores">
const form = document.querySelector(".formulario");

if (!jogadores) {
  jogadores = jogadores_inicial;
}

if (!partida) {
  partida = partida_inicial;
}

if (!sorteio) {
  partida = partida_inicial;
}

function nivelSelecionado() {
  const niveis = document.getElementsByName("nt");
  for (nivel of niveis) {
    if (nivel.checked) return nivel.value;
  }
}

function insereJogador() {
  let novoJogador = {
    nome: campoNome.value,
    nivel: nivelSelecionado(),
  };
  jogadores.push(novoJogador);

  localStorage.setItem("jogadores", JSON.stringify(jogadores));
}

function criaLi() {
  const li = document.createElement("li"); // cria o elemento <li>
  return li;
}

function limpaInput() {
  campoNome.value = ""; // reseta o input nome para vazio
  campoNome.focus(); // poe o ponteiro de digitação dentro do input nome
}

botaoAdc.addEventListener("click", function (event) {
  // ao clicar o botao de adicionar
  event.preventDefault();
  if (!campoNome.value) return; // se o botão estiver vazio nada acontece

  const li = criaLi();
  li.innerText = campoNome.value;
  jogadoresNaTela.appendChild(li); // insere o elemento <li> dentro da <ul class="jogadores">
  insereJogador(); // chama a função para adicionar o jogador digitado
  limpaInput();
  criaBotaoApagar(li);
});

function criaBotaoApagar(li) {
  li.innerText += "";
  const botaoApagar = document.createElement("button"); // cria o elemento <button>
  botaoApagar.innerText = ""; // texto dentro do botao criado
  li.appendChild(botaoApagar); // insere o botao dentro do mesmo <li> do jogador
  botaoApagar.setAttribute("class", "apagar"); // adiciona a classe apagar ao botao : <button class="apagar">
}

function removeDoSorteio(nome) {
  // Filtra o array removendo o elemento com o id passado
  jogadores = jogadores.filter(function (element) {
    return element.nome != nome;
  });

  // Atualiza os dados no Local Storage
  localStorage.setItem("jogadores", JSON.stringify(jogadores));
}

document.addEventListener("click", function (event) {
  //  comando generico de clique
  const elemento = event.target; // alvo do comando de clique

  if (elemento.classList.contains("apagar")) {
    // se o alvo do comando possuir a classe apagar
    elemento.parentElement.remove(); // remove o elemento pai, neste caso o <li>
    removeDoSorteio(elemento.parentElement.innerText);
  }
});


function sortearTimes(){  
  let jogadoresInseridos = jogadores
  let quantidadeDeTimes = parseInt(form.querySelector("#total-times").value)

  function comparar(a, b) {
    if ( a.nivel < b.nivel ){
      return 1;
    }
    if ( a.nivel > b.nivel ){
      return -1;
    }
    return 0;
  }
  
  function criarTimes(quantidade) {
    const times = []
  
    for (let i = 0; i < quantidade; i++) {
      times.push({nome: 'Time ' + (i + 1), jogadores: []}) 
    }
  
    return times
  }
  
  function alocarJogadores(jogadoresInseridos = [], quantidadeDeTimes) {
    const jogadores = jogadoresInseridos.sort(comparar)
    const times = criarTimes(quantidadeDeTimes)
  
    while(jogadores.length > 0) {
      times.forEach(time => {
         if (jogadores.length > 0) {
             time.jogadores.push(jogadores.shift())
         }
      })
    }
  
    return times
  }

  let sorteio = alocarJogadores(jogadoresInseridos, quantidadeDeTimes)
  localStorage.setItem("sorteio", JSON.stringify(sorteio));

  atualizarHistorico(sorteio)
}

function atualizarHistorico(sorteio) {
  const partida = JSON.parse(localStorage.getItem('partida'))
  let partidaDoHistorico = { ...partida, sorteio }

  const historico = JSON.parse(localStorage.getItem('historico')) || []
  historico.push(partidaDoHistorico)

  localStorage.setItem('historico', JSON.stringify(historico))
}

form.addEventListener("submit", function recebeEventoForm(evento) {
  evento.preventDefault();
  {
    let dataPartida = form.querySelector("#data").value;
    let totalJogadores = form.querySelector("#total-jogadores").value;
    let totalTimes = form.querySelector("#total-times").value;

    let novaPartida = {
      dataPartida: dataPartida,
      totalJogadores: totalJogadores,
      totalTimes: totalTimes,
    };

    let jogadoresAdc = Object.keys(jogadores).length;
    if (
      totalJogadores == jogadoresAdc &&
      parseInt(totalTimes) <= parseInt(totalJogadores)
    ) {
      localStorage.setItem("partida", JSON.stringify(novaPartida));
      sortearTimes()
      closeIt()
      window.location.href = 'historico-geral.html';

    } else alert("A quantidade de nomes é diferente do total de jogadores ou a quantidade de times é maior que a de jogadores.");
  }
});

function closeIt()
{

  localStorage.removeItem("jogadores")
  localStorage.removeItem("partida")
  localStorage.removeItem("sorteio")
}

window.onbeforeunload = closeIt;