

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
let computerChoiceImg = document.getElementById("computerChoiceImg")




rockBtn.onclick = function(){
    playerChoiceImg.src = "IMAGES/ROCKNEW.png"
    playerChoice.innerHTML = "You chose rock"
    computer = Math.floor(Math.random() * 3)
        if(computer == 0){
            computerChoice.innerHTML = "Computer chose rock";
            computerChoiceImg.src = "IMAGES/ROCKNEW.png"
            result.innerHTML = "DRAW!"
        }
        else if(computer == 1){
            computerChoice.innerHTML = "Computer chose paper";
            computerChoiceImg.src = "IMAGES/PAPERNEW.png"
            result.innerHTML = "YOU LOSE..."
        }
        else if (computer == 2){
            computerChoice.innerHTML = "Computer chose scissors";
            computerChoiceImg.src = "IMAGES/SCISSORSNEW.png"
            result.innerHTML = "YOU WIN!"
        }
}

paperBtn.onclick = function(){
    playerChoiceImg.src = "IMAGES/PAPERNEW.png"
    playerChoice.innerHTML = "You chose paper"
    computer = Math.floor(Math.random() * 3)
        if(computer == 0){
            computerChoice.innerHTML = "Computer chose rock";
            computerChoiceImg.src = "IMAGES/ROCKNEW.png"
            result.innerHTML = "YOU WIN!"
            
        }
        else if(computer == 1){
            computerChoice.innerHTML = "Computer chose paper";
            computerChoiceImg.src = "IMAGES/PAPERNEW.png"
            result.innerHTML = "DRAW!"
        }
        else if (computer == 2){
            computerChoice.innerHTML = "Computer chose scissors";
            computerChoiceImg.src = "IMAGES/SCISSORSNEW.png"
            result.innerHTML = "YOU LOSE..."
        }
}

scissorsBtn.onclick = function(){
    playerChoiceImg.src = "IMAGES/SCISSORSNEW.png"
    playerChoice.innerHTML = "You chose scissors"
    computer = Math.floor(Math.random() * 3)
        if(computer == 0){
            computerChoice.innerHTML = "Computer chose rock";
            computerChoiceImg.src = "IMAGES/ROCKNEW.png"
            result.innerHTML = "YOU LOSE..."
        }
        else if(computer == 1){
            computerChoice.innerHTML = "Computer chose paper";
            computerChoiceImg.src = "IMAGES/PAPERNEW.png"
            result.innerHTML = "YOU WIN!"
        }
        else if (computer == 2){
            computerChoice.innerHTML = "Computer chose scissors";
            computerChoiceImg.src = "IMAGES/SCISSORSNEW.png"
            result.innerHTML = "DRAW..."
        }
}
