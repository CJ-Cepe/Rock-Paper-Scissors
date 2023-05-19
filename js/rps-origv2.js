
const elements = {
    roundELem:  document.querySelector('.round-number'),
    playerScoreElem: document.querySelector('.player-score'),
    cpuScoreElem: document.querySelector('.cpu-score');
}

function playGame(){







        //handle round
        let roundElement = document.querySelector('.round-number');
        let round = 1;
    
        let playerScoreElement = document.querySelector('.player-score');
        let playerScore = 0;
    
        let cpuScoreElement = document.querySelector('.cpu-score');
        let cpuScore = 0;

        const resetButtonElement = document.querySelector(".reset-button");
        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");

    setTrainer()

    //connect the pokeball elements
    let pokeballOne = document.querySelector('.fire');
    let pokeballTwo = document.querySelector('.water')
    let pokeballThree = document.querySelector('.grass');

    pokeballOne.addEventListener('click', () => {
        let roundResult = playRound(0)
        round, playerScore, cpuScore = updateResult(roundResult, round, playerScore, cpuScore)
    });

    pokeballTwo.addEventListener('click', () => {
        let roundResult = playRound(1)
        round, playerScore, cpuScore = updateResult(roundResult, round, playerScore, cpuScore)
    });

    pokeballThree.addEventListener('click', () => {
        let roundResult = playRound(2)
        round, playerScore, cpuScore = updateResult(roundResult, round, playerScore, cpuScore)
    });

    resetButtonElement.addEventListener('click', () => {
        reset();
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    })
}

playGame()

function playRound (playerChoice){

    //cpu picks its choice
    let cpuChoice = getComputerChoice()
    setPokemon(playerChoice, cpuChoice)
    
    console.log(`Player Choice ${playerChoice} vs CPU Choice ${cpuChoice}`)

    if(playerChoice === cpuChoice){
        console.log("It's a tie");
        return 0; 
    } else if (playerChoice === 2 && cpuChoice === 0) {
        console.log("Computer wins") 
        return 2;
    } else if (playerChoice === 0 && cpuChoice === 2) {
        console.log("Player wins")
        return 1;  
    } else if (playerChoice < cpuChoice) {
        console.log("Computer wins")
        return 2;
    } else {
        console.log("Player wins")
        return 1;
    }
}

//set trainer per game reset
function setTrainer(){
    let trainerRightElement = document.querySelector('.right-trainer')
    let trainerLeftElement = document.querySelector('.left-trainer')

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    trainerLeftElement.src = './assets/trainers/t' + randomNumber + '.png'

    randomPokemon = Math.floor(Math.random() * 3) + 1;
    trainerRightElement.src = './assets/trainers/t' + randomNumber + '.png'
}

function setPokemon(playerType, cpuType){

    //pokemon
    let pokemonLeftElement = document.querySelector('.left-pokemon')
    let pokemonRightElement = document.querySelector('.right-pokemon')

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`random pokemon number ${randomNumber}`)
    if(playerType == 0) {
        pokemonLeftElement.src = './assets/pokemon/fire/p' + randomNumber + 'f.gif'
        console.log('./assets/pokemon/fire/p' + randomNumber + 'f.gif')
    } else if(playerType == 1) {
        pokemonLeftElement.src = './assets/pokemon/water/p' + randomNumber + 'w.gif'
        console.log('./assets/pokemon/water/p' + randomNumber + 'w.gif')
    } else {
        pokemonLeftElement.src = './assets/pokemon/grass/p' + randomNumber + 'g.gif'
        console.log('./assets/pokemon/grass/p' + randomNumber + 'g.gif')
    }

    randomNumber = Math.floor(Math.random() * 3) + 1;
    if(cpuType == 0) {
        pokemonRightElement.src = './assets/pokemon/fire/p' + randomNumber + 'f.gif'
        console.log('./assets/pokemon/fire/p' + randomNumber + 'f.gif')
    } else if(cpuType == 1) {
        pokemonRightElement.src = './assets/pokemon/water/p' + randomNumber + 'w.gif'
        console.log('./assets/pokemon/water/p' + randomNumber + 'w.gif')
    } else {
        pokemonRightElement.src = './assets/pokemon/grass/p' + randomNumber + 'g.gif'
        console.log('./assets/pokemon/grass/p' + randomNumber + 'g.gif')
    }
}

function getComputerChoice(){
    // pick random num between [1-3]
    let num = Math.floor(Math.random() * 3) + 1;
    //console.log(num);
    
    // depending on the number return
    switch (num) {
        case 1:
            return num-1;
        case 2:
            return num-1;
        case 3:
            return num-1;
    }
}

function updateResult(roundResult, round, playerScore, cpuScore){
    const leftElement = document.querySelector('.left-cont')
    const rightElement = document.querySelector('.right-cont')

    switch(roundResult){
        case 0:
            leftElement.style.backgroundColor = 'transparent';
            rightElement.style.backgroundColor = 'transparent';
            break;
        case 1:
            playerScore++;
            leftElement.style.backgroundColor = 'green';
            rightElement.style.backgroundColor = 'transparent';
            break;
        case 2: 
            cpuScore++;
            rightElement.style.backgroundColor = 'green';
            leftElement.style.backgroundColor = 'transparent';
            break
    }
    round++;
    console.log(roundResult)
    console.log(`${round} ${playerScore} ${cpuScore} `)

    //check if there is a winner
    checkWinner(playerScore, cpuScore)
    //reset
    updateScoreDisplay(round, playerScore, cpuScore)

    return round, playerScore, cpuScore;
}

function updateScoreDisplay(round, playerScore, cpuScore) {
    let roundElement = document.querySelector('.round-number');


    let playerScoreElement = document.querySelector('.player-score');


    let cpuScoreElement = document.querySelector('.cpu-score');


    cpuScoreElement.textContent = `${cpuScore}`
    playerScoreElement.textContent = `${playerScore}`
    roundElement.textContent = `${round}`
}

function checkWinner( playerScore, cpuScore) {
    if(playerScore === 6 || cpuScore === 6) {
        playerScore === 6 ? declareWinner(true) : declareWinner (false)
        //reset()
    }
}

function declareWinner(status) {
    console.log('===FINAL RESULTs===')
    if(status){
        console.log('Player Wins')
        displayWinner()
    } else {
        console.log('Computer Wins')
        displayWinner()
    }
}

function reset(){

    let roundElement = document.querySelector('.round-number');
    let playerScoreElement = document.querySelector('.player-score');
    let cpuScoreElement = document.querySelector('.cpu-score');
    const leftElement = document.querySelector('.left-cont')
    const rightElement = document.querySelector('.right-cont')

    let round = 1;
    let playerScore = 0;
    let cpuScore = 0;

    cpuScoreElement.textContent = `${cpuScore}`
    playerScoreElement.textContent = `${playerScore}`
    roundElement.textContent = `${round}`

    leftElement.style.backgroundColor = 'transparent';
    rightElement.style.backgroundColor = 'transparent';

    pokemonLeftElement.src = '#'
    pokemonRightElement.src = '#'
    playGame();
}

function displayWinner(){
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}