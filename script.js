//1. CRIANDO UM ARMAZENAMENTO PARA TODOS OS CARTÕES DENTRO DE UM
//ARRAYS

const cardArray = [
    {
        name: 'fries',
        img: './assets/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './assets/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './assets/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './assets/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './assets/milkshake.png',
    },
    {
        name: 'pizza',
        img: './assets/pizza.png',
    },
    {
        name: 'fries',
        img: './assets/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './assets/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './assets/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './assets/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './assets/milkshake.png',
    },
    {
        name: 'pizza',
        img: './assets/pizza.png',
    },
]

//2. SORTEANDO OS CARTÕES EM ORDEM DIFERENTE A CADA VEZ QUE
//ATUALIZARMOS A TELA
cardArray.sort(() => 0.5 - Math.random());

//3. ATRIBUINDO NOSSA DIV CRIADA NO ARQUIVO HTML A UMA VARIÁVEL
var gridDisplay = document.getElementById("grid");

//4. CRIANDO DE FATO O NOSSO QUADRO DE JOGO
createBoard();

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', './assets/blank.png');
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card);
        card.addEventListener("click", flipCard);
    }

}

//EXECUTANDO A FUNÇÃO

//CRIANDO UM EVENTO/FUNÇÃO QUE VAI NOS PERMITIR VIRAR OS
//CARTÕES QUANDO CLICARMOS NELES

var cardsChosenNames = [];

var cardsChosenIds = [];

var right = document.getElementById("right");

var wrong = document.getElementById("wrong");

var score = document.getElementById("score");

var rightPlays = 0;

var wrongPlays = 0;

function flipCard(){
    let cardId = this.getAttribute('data-id'); 
    cardsChosenNames.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosenNames.length == 2){
        setTimeout(checkForAMatch, 100);
    }
}

//CRIANDO A FUNÇÃO QUE VAI NOS PERMITIR CHECAR SE HOUVE UM
//MATCH

function checkForAMatch(){

    var cards = document.querySelectorAll("#grid img");

    var optionOneId = cardsChosenIds[0];
    var optionTwoId = cardsChosenIds[1];
    var optionOneName = cardsChosenNames[0];
    var optionTwoName = cardsChosenNames[1];

    if(cards[optionOneId] == cards[optionTwoId]){
        alert("you clicked in the same card!");
        cards[optionOneId].src = './assets/blank.png';
        cards[optionTwoId].src = './assets/blank.png';
        wrongPlays++;
        wrong.innerHTML = wrongPlays;
    }

    if((optionOneName == optionTwoName) && (cards[optionOneId] != cards[optionTwoId])){
        alert("its a match!");
        cards[optionOneId].src = './assets/white.png';
        cards[optionTwoId].src = './assets/white.png';
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        rightPlays++;
        right.innerHTML = rightPlays;
    }

    if(optionOneName != optionTwoName){
        alert("its not a match!");
        cards[optionOneId].src = './assets/blank.png';
        cards[optionTwoId].src = './assets/blank.png';
        wrongPlays++;
        wrong.innerHTML = wrongPlays;
    }

    cardsChosenNames = [];
    cardsChosenIds = [];

    score.innerHTML = (rightPlays * 3) - wrongPlays;

    if(rightPlays == cardArray.length/2){
        alert("you finished the game!" + "\n" + "your score is: " + score.innerHTML);
    }
}

var newGame = document.getElementById("newGame");

newGame.addEventListener("click", newGameFunction);

function newGameFunction(){
    document.location.reload(true);
}













