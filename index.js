

let rock = 0;
let paper = 1;
let scissors = 0;
let computerChoice = document.getElementById("computerChoice")

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

let computer = Math.floor(Math.random() * 3)

rockBtn.onclick = function(){
    console.log("rock")
}
paperBtn.onclick = function(){
    console.log("paper")
}
scissorsBtn.onclick = function(){
    console.log("scissors")
}


if(computer == 0){
    computerChoice.innerHTML = "rock";
}
else if(computer == 1){
    computerChoice.innerHTML = "paper";
}
else if (computer == 2){
    computerChoice.innerHTML = "scissors";
}
