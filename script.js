let order = [];
let clickedOrder = [];
let score = 0;

const azul = document.querySelector('.azul')
const vermelho = document.querySelector('.vermelho')
const amarelo = document.querySelector('.amarelo')
const verde = document.querySelector('.verde')

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//ascende proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert("Pontuação: $(score)\nVoce acertou! Iniciando próximo nível");
        nextLevel();
    }
}

//funcao do click do usuario
let click = (color) => {
    clickedOrder(clickedOrder.length) = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)

}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return verde;
    } else if(color == 1) {
        return vermelho;
    } else if(color == 2) {
        return amarelo;
    } else if(color == 3) {
        return azul;
    }
    
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}
 
//funcao para game over
let gameOver = () => {
    alert('Pontuação: ${score}!\nVoce perdeu o jogo!\nClique em OK para iniciar um novo jogo')
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert("Bem Vindo ao Genesis! Iniciando novo jogo!");
    score = 0;

    nextLevel();
}

//eventos de click para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

//inicio do jogo
playGame();