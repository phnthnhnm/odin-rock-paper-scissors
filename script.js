let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    default:
      return ''
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  const resultsDiv = document.getElementById('results')
  const scoreboardDiv = document.getElementById('scoreboard')

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "It's a tie!"
  }

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'paper') {
        resultsDiv.textContent = 'Computer wins! (Paper beats rock)'
        computerScore++
      } else if (computerChoice === 'scissors') {
        resultsDiv.textContent = 'You win! (Rock beats scissors)'
        humanScore++
      }
      break

    case 'paper':
      if (computerChoice === 'scissors') {
        resultsDiv.textContent = 'Computer wins! (Scissors beats paper)'
        computerScore++
      } else if (computerChoice === 'rock') {
        resultsDiv.textContent = 'You win! (Paper beats rock)'
        humanScore++
      }
      break

    case 'scissors':
      if (computerChoice === 'rock') {
        resultsDiv.textContent = 'Computer wins! (Rock beats scissors)'
        computerScore++
      } else if (computerChoice === 'paper') {
        resultsDiv.textContent = 'You win! (Scissors beats paper)'
        humanScore++
      }
      break
  }

  scoreboardDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`

  if (humanScore === 5) {
    resultsDiv.textContent += '\nYou win the game!'
    resetGame()
  } else if (computerScore === 5) {
    resultsDiv.textContent += '\nComputer wins the game!'
    resetGame()
  }
}

function resetGame() {
  humanScore = 0
  computerScore = 0
}

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()))
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()))
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()))
