const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const btnLizard = document.createElement('button');
const btnSpock = document.createElement('button');

const container = document.querySelector('.container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Pick one';

btnRock.classList.add('buttons');
btnPaper.classList.add('buttons');
btnScissors.classList.add('buttons');
btnLizard.classList.add('buttons');
btnSpock.classList.add('buttons');

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
btnLizard.textContent = "Lizard";
btnSpock.textContent = "Spock";


container.appendChild(content);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(btnLizard);
container.appendChild(btnSpock);


let player;
let playerScore = 0;
let computerScore = 0;
let i =1;

let number = () => Math.floor(Math.random() *4);
const rps=["rock","paper","scissors","lizard","spock"];

function computerPlay(){
  const x=number();
  //console.log(rps[x],x);
  return  computer = rps[x]
  //console.log("computer plays: ",computer);
 
}  


  btnRock.addEventListener('click', () =>{
    
    player = "rock"
    console.log("computer plays: ",computerPlay());
    console.log("player plays: ",player);
    
    result(computer,player);  
  });
  
  
  btnPaper.addEventListener('click', () =>{
      
    player = "paper"
    console.log("computer plays: ",computerPlay());
    console.log("player plays: ",player);
    
    result(computer,player);  
  });
  
  btnScissors.addEventListener('click', () =>{
      
    player = "scissors"
    console.log("computer plays: ",computerPlay());
    console.log("player plays: ",player);
    
    result(computer,player);  
  });
  
  btnLizard.addEventListener('click', () =>{
      
    player = "lizard"
    console.log("computer plays: ",computerPlay());
    console.log("player plays: ",player);
    
    result(computer,player);  
  });
  
  btnSpock.addEventListener('click', () =>{
      
    player = "spock"
    console.log("computer plays: ",computerPlay());
    console.log("player plays: ",player);
    
    result(computer,player);  
  });

console.log("FINAL SCORE","computer score: ", computerScore, "player score: ",playerScore)







function result(computer, player){
  
  if (computer === player){console.log("its a tie")}
  
  else if(computer === "scissors" && player === "rock"){console.log("(and as it always has) Rock crushes Scissors"), playerScore++}
  else if(computer === "rock" && player === "paper"){console.log("Paper covers Rock"), playerScore++}
  else if(computer === "paper" && player === "scissors"){console.log("Scissors cuts Paper"), playerScore++}

  else if(computer === "lizard" && player === "scissors"){console.log("Scissors decapitates Lizard"), playerScore++}
  else if(computer === "lizard" && player === "rock"){console.log("Rock crushes Lizard"), playerScore++}
  else if(computer === "spock" && player === "lizard"){console.log("Lizard poisons Spock"), playerScore++}
  else if(computer === "scissors" && player === "spock"){console.log("Spock smashes Scissors"), playerScore++}
  else if(computer === "paper" && player === "lizard"){console.log("Lizard eats Paper"), playerScore++}
  else if(computer === "spock" && player === "paper"){console.log("Paper disproves Spock"), playerScore++}
  else if(computer === "rock" && player === "spock"){console.log("Spock vaporizes Rock"), playerScore++}



  else if(computer === "rock" && player === "scissors"){console.log("(and as it always has) Rock crushes Scissors"), computerScore++}
  else if(computer === "paper" && player === "rock"){console.log("Paper covers Rock"), computerScore++}
  else if(computer === "scissors" && player === "paper"){console.log("Scissors cuts Paper"), computerScore++}

  else if(computer === "scissors" && player === "lizard"){console.log("Scissors decapitates Lizard"), computerScore++}
  else if(computer === "rock" && player === "lizard"){console.log("Rock crushes Lizard"), computerScore++}
  else if(computer === "lizard" && player === "spock"){console.log("Lizard poisons Spock"), computerScore++}
  else if(computer === "spock" && player === "scissors"){console.log("Spock smashes Scissors"), computerScore++}
  else if(computer === "lizard" && player === "paper"){console.log("Lizard eats Paper"), computerScore++}
  else if(computer === "paper" && player === "spock"){console.log("Paper disproves Spock"), computerScore++}
  else if(computer === "spock" && player === "rock"){console.log("Spock vaporizes Rock"), computerScore++}
  else{console.log("please enter a acceptable answer")}

}


  //let player = prompt("please type rock paper or scissors");
  
  

  //result(computer,player);

  //console.log("computer score: ", computerScore, "player score: ",playerScore, "you have played ",i,"rounds")



//if(computerScore>playerScore){console.log("computer wins!")}
//else if(computerScore<playerScore){console.log("you win!")}
//else{"it's a tie"}


