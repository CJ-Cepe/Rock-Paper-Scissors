
//Possible values
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
    
    // if else to compare players choice
    // check if tie
    // check if player picks scissor while comp picks rock
    // check if player picks rock while comp picks scissor
    // check which player picks greater since the values is in array
    // return otherwise
    if(playerSelection === computerSelection){
        console.log("It's a tie");
        return 0; 
    } else if (playerSelection === VALUES.length-1 && computerSelection === 0) {
        console.log("Computer wins") 
        return 2;
    } else if (playerSelection === 0 && computerSelection === VALUES.length-1) {
        console.log("Player wins")
        return 1;
    } else if (playerSelection < computerSelection) {
        console.log("Computer wins")
        return 2;
    } else {
        console.log("Player wins")
        return 1;
    }
}

// function to print final results
const printFinalResult = (playerScore, computerScore) => {
    console.log(`==== FINAL SCORE ===== 
    Player = ${playerScore}
    Computer = ${computerScore}
`)
    if(playerScore > computerScore){
        console.log("Player WINS!!!")
    } else if (playerScore < computerScore){
        console.log("Computer WINS!!!")
    } else {
        console.log("It's a TIE!!!")
    }
}

//function to play the game
const game = function () {

    //hold score values
    let p1Score = 0;
    let c1Score = 0;

    for(i = 0; i < 5 ; i++){
        //ask player num
        let ans = prompt("Pick between Rock, Paper, and Scissors");
        //lowercase prompt and check index in the array
        let playerAns = VALUES.indexOf(ans.toLowerCase());
        //get computer answer
        let computerAns = getComputerChoice();
        //compare answers - pass player and computer ans
        let result = playRound(playerAns, computerAns);
        //update result
        if(result == 1) {
            p1Score++;
        } else if (result == 2) {
            c1Score++;
        }
    }

    //print final results
    printFinalResult(p1Score, c1Score)
}

//initialize the game
//game();


