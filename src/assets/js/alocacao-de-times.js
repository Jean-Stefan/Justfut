let jogadoresInseridos = [{ 
  nome: 'leo',
  classificacao: 5,
}, { 
  nome: 'lenio',
  classificacao: 5,
}, { 
  nome: 'renam',
  classificacao: 4,
}, { 
  nome: 'meio kg',
  classificacao: 2,
}, { 
  nome: 'marcelo',
  classificacao: 1,
}, { 
  nome: 'vitinho',
  classificacao: 4,
}, { 
  nome: 'rodrigo',
  classificacao: 3,
}, { 
  nome: 'vania',
  classificacao: 1,
},{ 
  nome: 'bela',
  classificacao: 2,
}, { 
  nome: 'mel',
  classificacao: 3,
}]

function comparar(a, b) {
  if ( a.classificacao < b.classificacao ){
    return 1;
  }
  if ( a.classificacao > b.classificacao ){
    return -1;
  }
  return 0;
}

function criarTimes(quantidade) {
  const times = []

  for (let i = 0; i < quantidade; i++) {
    times.push({nome: 'time' + (i + 1), jogadores: []}) 
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