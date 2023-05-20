
const elements = {
    roundElem:  document.querySelector('.round-number'),
    roundResultElem: document.querySelector('.round-result'),
    playerScoreElem: document.querySelector('.player-score'),
    cpuScoreElem: document.querySelector('.cpu-score'),

    resetButtonElem: document.querySelector(".reset-button"),
    modalElem: document.querySelector(".modal"),
    overlayElem: document.querySelector(".overlay"),

    pokeballOne: document.querySelector('.fire-pokeball'),
    pokeballTwo: document.querySelector('.water-pokeball'),
    pokeballThree: document.querySelector('.grass-pokeball'),

    trainerRightElem: document.querySelector('.right-trainer'),
    trainerLeftElem: document.querySelector('.left-trainer'),

    pokemonLeftElem: document.querySelector('.left-pokemon'),
    pokemonRightElem: document.querySelector('.right-pokemon'),

    leftElem: document.querySelector('.left-cont'),
    rightElem: document.querySelector('.right-cont'),

    cont1Elem: document.querySelector('.cont1'),
    audioElem: document.querySelector('.audio1'),
    audio2Elem: document.querySelector('.audio2'),

    modalLeftElem: document.querySelector('.modal-left'),
    modalTextElem: document.querySelector('.modal-text'),
    modalTrainerElem: document.querySelector('.modal-trainer'),

    introModalElem: document.querySelector('.intro-modal'),
    playButtonElem: document.querySelector('.play-button'),
}

const audio = {
    battle: new Audio('../assets/audio/battle.mp3'),
    loss: new Audio('../assets/audio/loss.mp3'),
    victory: new Audio('../assets/audio/victory.mp3'),
    damage: new Audio('../assets/audio/damage.mp3'),
    absorb: new Audio('../assets/audio/absorb.mp3'),
}

let round = 0;
let playerScore = 0;
let cpuScore = 0;

let githubAddress = 'https://github.com/CJ-Cepe/Rock-Paper-Scissors/raw/main/assets/audio/'
githubAddress = '../assets/audio/'
let githubAddressEnd = '' //?raw=true

elements.pokeballOne.addEventListener('click', () => {
    resetPokemonColor()
    let roundResult = playRound(0)
    updateResult(roundResult)
});

elements.pokeballTwo.addEventListener('click', () => {
    resetPokemonColor()
    let roundResult = playRound(1)
    updateResult(roundResult)
});

elements.pokeballThree.addEventListener('click', () => {
    resetPokemonColor()
    let roundResult = playRound(2)
    updateResult(roundResult)
});

elements.resetButtonElem.addEventListener('click', () => {
    reset();
    elements.modalElem.classList.add('hidden')
    elements.overlayElem.classList.add('hidden')
})

elements.playButtonElem.addEventListener('click', function () {
    playAudio(1)
    //audio.battle.play()
    elements.introModalElem.classList.add('hidden')
    elements.overlayElem.classList.add('hidden')
    elements.overlayElem.style.background = 'background: rgba(0, 0, 0, 0.5)'
    elements.overlayElem.style.backdropFilter = 'blur(3px)'
})

function resetPokemonColor(){
    elements.pokemonLeftElem.style.filter = 'grayscale(0)'
    elements.pokemonRightElem.style.filter = 'grayscale(0)'
}

playGame()

function playAudio(whatAudio){
    switch (whatAudio) {
        case 1:
            elements.audioElem.src = githubAddress + 'battle.mp3' + githubAddressEnd
            elements.audioElem.play()
            break;
        case 2:
            elements.audioElem.src = githubAddress + 'victory.mp3' + githubAddressEnd
            elements.audioElem.play()
            break;
        case 3:
            elements.audioElem.src = githubAddress + 'loss.mp3' + githubAddressEnd
            elements.audioElem.play()
        case 4:
            elements.audio2Elem.src = githubAddress + 'damage.mp3' + githubAddressEnd
            elements.audio2Elem.play()
            break;
        case 5:
            elements.audio2Elem.src = githubAddress + 'absorb.mp3' + githubAddressEnd
            elements.audio2Elem.play()
            break;
        case 6:
            elements.audioElem.pause();
            elements.audioElem.currentTime = 0;
            elements.audioElem.src = ''
            break;
    }
}

function playGame(){
    setTrainer()
    
}


//set trainer per game reset
function setTrainer(){
    let randomNumber = getRandomNumber(13)
    elements.trainerLeftElem.src = './assets/trainers/hero/t' + randomNumber + '.png'

    randomNumber = getRandomNumber(20)
    elements.trainerRightElem.src = './assets/trainers/villain/t' + randomNumber + 'v.png'
}

function getRandomNumber(num=3){
    return Math.floor(Math.random() * num) + 1;
}


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


function getComputerChoice(){
    // pick random num between [1-3]
    let num = getRandomNumber(3);
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



function setPokemon(playerType, cpuType){
    //pokemon
    let randomNumber = getRandomNumber(20)
    console.log(`random pokemon number ${randomNumber}`)
    if(playerType == 0) {
        elements.pokemonLeftElem.src = './assets/pokemon/fire/p' + randomNumber + 'f.gif'
        console.log('./assets/pokemon/fire/p' + randomNumber + 'f.gif')
    } else if(playerType == 1) {
        elements.pokemonLeftElem.src = './assets/pokemon/water/p' + randomNumber + 'w.gif'
        console.log('./assets/pokemon/water/p' + randomNumber + 'w.gif')
    } else {
        elements.pokemonLeftElem.src = './assets/pokemon/grass/p' + randomNumber + 'g.gif'
        console.log('./assets/pokemon/grass/p' + randomNumber + 'g.gif')
    }

    if(randomNumber<11){
        elements.pokemonLeftElem.style.height = "50%";
    } else {
        elements.pokemonLeftElem.style.height = "40%";
    }

    randomNumber = getRandomNumber(20)
    if(cpuType == 0) {
        elements.pokemonRightElem.src = './assets/pokemon/fire/p' + randomNumber + 'f.gif'
        console.log('./assets/pokemon/fire/p' + randomNumber + 'f.gif')
    } else if(cpuType == 1) {
        elements.pokemonRightElem.src = './assets/pokemon/water/p' + randomNumber + 'w.gif'
        console.log('./assets/pokemon/water/p' + randomNumber + 'w.gif')
    } else {
        elements.pokemonRightElem.src = './assets/pokemon/grass/p' + randomNumber + 'g.gif'
        console.log('./assets/pokemon/grass/p' + randomNumber + 'g.gif')
    }

    if(randomNumber<11){
        elements.pokemonRightElem.style.height = "50%";
    } else {
        elements.pokemonRightElem.style.height = "40%";
    }
}


function updateResult(roundResult){
    switch(roundResult){
        case 0:
            elements.cont1Elem.style.backgroundColor = '#273c75';
            //elements.leftElem.style.backgroundColor = 'transparent';
            //elements.rightElem.style.backgroundColor = 'transparent';
            elements.roundResultElem.textContent = `It's a Tie`;
            //audio.absorb.play()
            playAudio(5)
            break;
        case 1:
            playerScore++;
            elements.cont1Elem.style.backgroundColor = '#44bd32';
            //elements.leftElem.style.backgroundColor = 'green';
            //elements.rightElem.style.backgroundColor = 'transparent';
            elements.roundResultElem.textContent = `Player wins this round`;
            elements.pokemonRightElem.style.filter = 'grayscale(100%)'
            elements.pokemonRightElem.classList.add('blink')
            //audio.damage.play()
            playAudio(4)
            setTimeout(() => {
                elements.pokemonRightElem.classList.remove('blink')
            }, 500);
            break;
        case 2: 
            cpuScore++;
            elements.cont1Elem.style.backgroundColor = '#c23616';
            //elements.rightElem.style.backgroundColor = 'green';
            //elements.leftElem.style.backgroundColor = 'transparent';
            elements.roundResultElem.textContent = `CPU wins this round`;
            elements.pokemonLeftElem.style.filter = 'grayscale(100%)'
            elements.pokemonLeftElem.classList.add('blink')
            //audio.damage.play()
            playAudio(4)
            setTimeout(() => {
                elements.pokemonLeftElem.classList.remove('blink')
            }, 500);
            break
    }
    round++;
    console.log(roundResult)
    console.log(`${round} ${playerScore} ${cpuScore} `)

    //check if there is a winner
    checkWinner()
    //reset
    updateScoreDisplay()

}

function checkWinner() {
    if(playerScore === 6 || cpuScore === 6) {
        playerScore === 6 ? declareWinner(true) : declareWinner (false)
        //reset()
    }
}

function declareWinner(status) {
    console.log('===FINAL RESULTs===')
    if(status){
        console.log('Player Wins')
        displayWinner(true)
    } else {
        console.log('Computer Wins')
        displayWinner(false)
    }
}

function displayWinner(winner){
    
    if(winner){
        playAudio(2);
        //elements.modalElem.style.color = 'green'
        elements.modalLeftElem.style.color = `#44bd32`
        elements.modalTextElem.textContent = `Player`
        elements.modalTrainerElem.src = elements.trainerLeftElem.src
    } else {
        playAudio(3);
        //elements.modalElem.style.backgroundColor = 'red';
        elements.modalLeftElem.style.color = `#e84118`
        elements.modalTextElem.textContent = `CPU`
        elements.modalTrainerElem.src = elements.trainerRightElem.src;
    }

    elements.modalElem.classList.remove('hidden')
    elements.overlayElem.classList.remove('hidden')
}


function updateScoreDisplay() {
    elements.cpuScoreElem.textContent = `${cpuScore}`
    elements.playerScoreElem.textContent = `${playerScore}`
    elements.roundElem.textContent = `Round ${round}`
}



function reset(){
    playAudio(1);
    resetPokemonColor()
    
    round = 0;
    playerScore = 0;
    cpuScore = 0;

    elements.cpuScoreElem.textContent = `${cpuScore}`
    elements.playerScoreElem.textContent = `${playerScore}`
    elements.roundElem.textContent = ``

    elements.cont1Elem.style.backgroundColor = 'transparent';
    //elements.leftElem.style.backgroundColor = 'transparent';
    //elements.rightElem.style.backgroundColor = 'transparent';

    elements.pokemonLeftElem.src = ''
    elements.pokemonRightElem.src = ''
    elements.roundResultElem.textContent = ``
    playGame();
}

