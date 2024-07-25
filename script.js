const playersScore = {
  humanScore: 0,
  computerScore: 0
};


function getComputerChoice() {
  const hands = ['rock', 'paper', 'scissors'];
  return hands[(Math.floor(Math.random() * 3))]
}
function getHumanChoice() {
  const answer = prompt('write your choice');
  return answer;
}
function playRound(humanChoice, computerChoice) {
  hChoice = humanChoice.toLowerCase();
  if (hChoice === 'rock') {
    if (computerChoice === 'scissors') {
      console.log(`Your Win. ${humanChoice} beats ${computerChoice}`);
      playersScore.humanScore += 1;
    } else if (computerChoice === 'paper') {
      console.log(`Your Lose! ${computerChoice} beats ${humanChoice}`);
      playersScore.computerScore += 1;
    } else if (computerChoice === 'rock') {
      console.log(`Draw! Both players chose a ${hChoice}.`);
    }
  } else if (hChoice === 'scissors') {
    if (computerChoice === 'paper') {
      console.log(`Your Win. ${humanChoice} beats ${computerChoice}`);
      playersScore.humanScore += 1;
    } else if (computerChoice === 'rock') {
      console.log(`Your Lose! ${computerChoice} beats ${humanChoice}`);
      playersScore.computerScore += 1;
    } else if (computerChoice === 'scissors') {
      console.log(`Draw! Both players chose a ${hChoice}.`);
    }
  } else if (hChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log(`Your Win. ${humanChoice} beats ${computerChoice}`);
      playersScore.humanScore += 1;
    } else if (computerChoice === 'scissors') {
      console.log(`Your Lose! ${computerChoice} beats ${humanChoice}`);
      playersScore.computerScore += 1;
    } else if (computerChoice === 'paper') {
      console.log(`Draw! Both players chose a ${hChoice}.`);
    }
  }
}

function playGame() {
  while (playersScore.humanScore <= 4 && playersScore.computerScore <= 4) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (playersScore.humanScore === 5) {
    console.log(`Congratulations! The human player has won!`);
    playersScore.humanScore = 0;
    playersScore.computerScore = 0;
  } else if (playersScore.computerScore === 5) {
    console.log(`Congratulations! The computer player has won!`);
    playersScore.humanScore = 0;
    playersScore.computerScore = 0;
  }
}

playGame();