

const VALUES = ['rock', 'paper', 'scissor'];

/* will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
   We’ll use this function in the game to make the computer’s play */
function getComputerChoice (){
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


//function that plays a single round of Rock Paper Scissors
//return who's the winner
const playRound = (playerSelection, computerSelection) => {
    console.log(VALUES[playerSelection] + " vs " + VALUES[computerSelection])
    //compare players choice
    if(playerSelection === computerSelection){
        return "It's a tie";
    } else if (playerSelection === VALUES.length-1 && computerSelection === 0) {
        return "Computer wins";
    } else if (playerSelection === 0 && computerSelection === VALUES.length-1) {
        return "Player wins";
    } else if (playerSelection < computerSelection) {
        return "Computer wins";
    } else {
        return "Player wins";
    }
}

const game = function () {
    //ask player num
    let ans = prompt("Pick between Rock, Paper, and Scissors");
    //lowercase prompt and check if in array
    console.log(ans.toLowerCase())
    let playerAns = VALUES.indexOf(ans.toLowerCase());
    console.log(playerAns);
    let computerAns = getComputerChoice();
    let result = playRound(playerAns, computerAns);
    console.log(result)
}

for(i = 0; i < 5 ; i++){
    game();
}

