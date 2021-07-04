let pessoas, divisao, primeira, segunda, totalPrimeira, totalSegunda, intervalo, qtdTimes
intervalo = 3
qtdTimes = 2
pessoas = {
    jogador: [{
        nome: "Eric",
        nivel: 3,
    },
    {
        nome: "Jean",
        nivel: 3,
    },
    {
        nome: "Luiz",
        nivel: 3,
    },
    {
        nome: "Lucas",
        nivel: 1,
    },
    {
        nome: "Luan",
        nivel: 1,
    },
    {
        nome: "Roger",
        nivel: 1,
    },
    {
        nome: "Marcelo",
        nivel: 1,
    },
    {
        nome: "Thiago",
        nivel: 1,
    },
    {
        nome: "Bruno",
        nivel: 1,
    },
    {
        nome: "Nicolas",
        nivel: 1,
    }]


}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

const somaNivel = array => {
    let tracker = 0
    for (valor of array) {
        tracker += valor.nivel
    }
    return tracker
}

divisao = Math.floor(pessoas.jogador.length / qtdTimes)
let checksArray = []
while (true) {
    let tempArray = [...pessoas.jogador]
    shuffleArray(tempArray)
    let final = 0;
    checksArray = [];
    for (let i = 0; i < qtdTimes; i++) {
        let temp = tempArray.splice(0, divisao)
        checksArray.push(temp);
        final += somaNivel(temp);
    }
    
    let check = Math.ceil(final / qtdTimes);
    let recheck = 0;
    for (let i = 0; i < qtdTimes; i++) {
        if (somaNivel(checksArray[i]) - check >= -intervalo && somaNivel(checksArray[i]) - check <= intervalo) {
            recheck++;
        }
                }
    if (recheck === qtdTimes) {
        break;
    }
}

for (let i = 0; i < qtdTimes; i++) {
    console.log(checksArray[i]) 
    console.log(somaNivel(checksArray[i]))
}