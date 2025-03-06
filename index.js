

let rock = 0;
let paper = 1;
let scissors = 0;
let computerChoice = document.getElementById("computerChoice");
let playerChoice = document.getElementById("playerChoice");
let button = document.getElementsByClassName("button");
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let computer;
let result = document.getElementById("result");

let playerChoiceImg = document.getElementById("playerChoiceImg");
    




rockBtn.onclick = function(){
    playerChoiceImg.src = "IMAGES/ROCK.png"
    playerChoice.innerHTML = "You chose rock"
    computer = Math.floor(Math.random() * 3)
        if(computer == 0){
            computerChoice.innerHTML = "Computer chose rock";
            result.innerHTML = "DRAW!"
        }
        else if(computer == 1){
            computerChoice.innerHTML = "Computer chose paper";
            result.innerHTML = "YOU LOSE..."
        }
        else if (computer == 2){
            computerChoice.innerHTML = "Computer chose scissors";
            result.innerHTML = "YOU WIN!"
        }
}

paperBtn.onclick = function(){
    playerChoiceImg.src = "IMAGES/PAPER.png"
    playerChoice.innerHTML = "You chose paper"
    computer = Math.floor(Math.random() * 3)
        if(computer == 0){
            computerChoice.innerHTML = "Computer chose rock";
            result.innerHTML = "YOU WIN!"
            
        }
        else if(computer == 1){
            computerChoice.innerHTML = "Computer chose paper";
            result.innerHTML = "DRAW!"
        }
        else if (computer == 2){
            computerChoice.innerHTML = "Computer chose scissors";
            result.innerHTML = "YOU LOSE..."
        }
}

scissorsBtn.onclick = function(){
    playerChoiceImg.src = "IMAGES/SCISSORS.png"
    playerChoice.innerHTML = "You chose scissors"
    computer = Math.floor(Math.random() * 3)
        if(computer == 0){
            computerChoice.innerHTML = "Computer chose rock";
            result.innerHTML = "YOU LOSE..."
        }
        else if(computer == 1){
            computerChoice.innerHTML = "Computer chose paper";
            result.innerHTML = "YOU WIN!"
        }
        else if (computer == 2){
            computerChoice.innerHTML = "Computer chose scissors";
            result.innerHTML = "DRAW..."
        }
}


