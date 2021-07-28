//Juego de "piedra", "papel" o "tijera"
// rock, paper, scissors

/* Esta es mi versión del viejo juego del "piedra", "papel" y "tijera"
*/

//FUNCION QUE VALIDA LA ENTRADA DEL USUARIO
const getUserChoice = userInput => {
  userInput= userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors'){
      return userInput;
    }else{
      console.log("Invalid Param");
    }
};

//Función que elije de manera aleatoria el "input" de la computadora
function getComputerChoice(){
  randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
    return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// Función que determina QUIEN GANA
function determineWinner(userChoice, computerChoice){
  if(userChoice===computerChoice){
    return "Tie";
  }//User ROCK
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
return "Computer won";
    }else if(computerChoice==='scissors'){
      return "User won";
    }
  }//User PAPER
  if(userChoice==='paper'){
    if(computerChoice==='rock'){
      return "User won";
    }else if(computerChoice==='scissors'){
      return "Computer won";
    }
  }//User SCISSORS
  if(userChoice==='scissors'){
    if(computerChoice==='paper'){
      return "User won";
    }else if(computerChoice==='rock'){
      return "Computer won";
    }
  }
}

function playGame(){
  //Asigna el valor del usuario
  userChoice = getUserChoice('rock');
  computerChoice=getComputerChoice();
  //Output de las opciones elegidas
  console.log(`User choice was: ${userChoice}, and PC choice was: ${computerChoice} `);
  //Llamado de función "determineWinner"
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();