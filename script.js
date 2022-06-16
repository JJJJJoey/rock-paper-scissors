
const wrapper = document.createElement('div');
document.body.appendChild(wrapper);
wrapper.classList.add('wrapper');

const titleCont = document.createElement('div');
wrapper.appendChild(titleCont);
titleCont.classList.add('titleCont');
titleCont.textContent = 'lets play';


const htBtn = document.createElement('button');
wrapper.appendChild(htBtn);
htBtn.classList.add('htBtn');
htBtn.textContent = 'dont know how to play? click here';



const btnContainer = document.createElement('div');
wrapper.appendChild(btnContainer);
btnContainer.classList.add('btnContainer');

const txtCont = document.createElement('div');
wrapper.appendChild(txtCont);
txtCont.classList.add('txtResult');


const scoreCont = document.createElement('div');
wrapper.appendChild(scoreCont);
scoreCont.classList.add('scoreTxt');





let player;
let playerScore = 0;
let computerScore = 0;
let resultText;



let number = () => Math.floor(Math.random() *4);
const rps=["rock","paper","scissors","lizard","spock"];

function playerTurn(e){
  
  player = e.target.textContent;
  
  console.log("computer plays: ",computerPlay());
  console.log("player plays: ",player);
  
  result(computer,player);  
  txtCont.textContent = resultText;
}



for(let i=0;i<=4;i++){
  const btn = document.createElement('button');
  btnContainer.appendChild(btn);
  btn.classList.add('buttons');
  btn.textContent= rps[i];
  //btn.style.background="url('images/"+rps[i]+".png')";
  btn.style.background=`url(/images/${rps[i]}.png)`


  btn.addEventListener('click', playerTurn);
  btn.addEventListener('click',score)
  
}


function computerPlay(){
  const x=number();
  //console.log(rps[x],x);
  return  computer = rps[x]
  //console.log("computer plays: ",computer);
 
}  

function score(){
  scoreCont.textContent = "computer score: "+ computerScore+"  "+ "player score: "+playerScore;
}




function result(computer, player){
  
  if (computer === player){resultText=("its a tie")}
  
  else if(computer === "scissors" && player === "rock"){resultText="Rock crushes Scissors", playerScore++}
  else if(computer === "rock" && player === "paper"){resultText="Paper covers Rock", playerScore++}
  else if(computer === "paper" && player === "scissors"){resultText="Scissors cuts Paper", playerScore++}

  else if(computer === "lizard" && player === "scissors"){resultText="Scissors decapitates Lizard", playerScore++}
  else if(computer === "lizard" && player === "rock"){resultText="Rock crushes Lizard", playerScore++}
  else if(computer === "spock" && player === "lizard"){resultText="Lizard poisons Spock", playerScore++}
  else if(computer === "scissors" && player === "spock"){resultText="Spock smashes Scissors", playerScore++}
  else if(computer === "paper" && player === "lizard"){resultText="Lizard eats Paper", playerScore++}
  else if(computer === "spock" && player === "paper"){resultText="Paper disproves Spock", playerScore++}
  else if(computer === "rock" && player === "spock"){resultText="Spock vaporizes Rock", playerScore++}



  else if(computer === "rock" && player === "scissors"){resultText="Rock crushes Scissors", computerScore++}
  else if(computer === "paper" && player === "rock"){resultText="Paper covers Rock", computerScore++}
  else if(computer === "scissors" && player === "paper"){resultText="Scissors cuts Paper", computerScore++}

  else if(computer === "scissors" && player === "lizard"){resultText="Scissors decapitates Lizard", computerScore++}
  else if(computer === "rock" && player === "lizard"){resultText="Rock crushes Lizard", computerScore++}
  else if(computer === "lizard" && player === "spock"){resultText="Lizard poisons Spock", computerScore++}
  else if(computer === "spock" && player === "scissors"){resultText="Spock smashes Scissors", computerScore++}
  else if(computer === "lizard" && player === "paper"){resultText="Lizard eats Paper", computerScore++}
  else if(computer === "paper" && player === "spock"){resultText="Paper disproves Spock", computerScore++}
  else if(computer === "spock" && player === "rock"){resultText="Spock vaporizes Rock", computerScore++}
  else{console.log("please enter a acceptable answer")}

}


  //let player = prompt("please type rock paper or scissors");
  
  

  //result(computer,player);

  //console.log("computer score: ", computerScore, "player score: ",playerScore, "you have played ",i,"rounds")



//if(computerScore>playerScore){console.log("computer wins!")}
//else if(computerScore<playerScore){console.log("you win!")}
//else{"it's a tie"}


