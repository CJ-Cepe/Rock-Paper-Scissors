    //handle round
    let roundElement = document.querySelector('.round-number');
    let round = 1;

    let playerScoreElement = document.querySelector('.player-score');
    let playerScore = 0;

    let cpuScoreElement = document.querySelector('.cpu-score');
    let cpuScore = 0;

    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

//pick pokeball compare to cpu choice
    let pokeballOne = document.querySelector('.fire');
    let pokeballTwo = document.querySelector('.water')
    let pokeballThree = document.querySelector('.grass');

    pokeballOne.addEventListener('click', () => {
        let roundResult = playRound(0)
        updateResult(roundResult)
    });

    pokeballTwo.addEventListener('click', () => {
        let roundResult = playRound(1)
        updateResult(roundResult)
    });

    pokeballThree.addEventListener('click', () => {
        let roundResult = playRound(2)
        updateResult(roundResult)
    });


function playRound (playerChoice){

    let cpuChoice = getComputerChoice()

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

function updateResult(roundResult){
    switch(roundResult){
        case 0:
            break;
        case 1:
            playerScore++;
            break;
        case 2: 
            cpuScore++;
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

function updateScoreDisplay() {
    cpuScoreElement.textContent = `${cpuScore}`
    playerScoreElement.textContent = `${playerScore}`
    roundElement.textContent = `${round}`
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
        displayWinner()
    } else {
        console.log('Computer Wins')
        displayWinner()
    }
}

function reset(){
    round = 1;
    playerScore = 0;
    cpuScore = 0;

    cpuScoreElement.textContent = `${cpuScore}`
    playerScoreElement.textContent = `${playerScore}`
    roundElement.textContent = `${round}`

    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

function displayWinner(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}