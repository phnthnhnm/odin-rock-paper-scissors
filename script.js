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

  const choiceEmojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️',
  }

  resultsDiv.innerHTML = `<span class="choice-emoji">${choiceEmojis[humanChoice]}</span> vs <span class="choice-emoji">${choiceEmojis[computerChoice]}</span>\n`

  if (humanChoice === computerChoice) {
    resultsDiv.innerHTML += "It's a tie!"
  }

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'paper') {
        resultsDiv.innerHTML += 'Computer wins!'
        computerScore++
      } else if (computerChoice === 'scissors') {
        resultsDiv.innerHTML += 'You win!'
        humanScore++
      }
      break

    case 'paper':
      if (computerChoice === 'scissors') {
        resultsDiv.innerHTML += 'Computer wins!'
        computerScore++
      } else if (computerChoice === 'rock') {
        resultsDiv.innerHTML += 'You win!'
        humanScore++
      }
      break

    case 'scissors':
      if (computerChoice === 'rock') {
        resultsDiv.innerHTML += 'Computer wins!'
        computerScore++
      } else if (computerChoice === 'paper') {
        resultsDiv.innerHTML += 'You win!'
        humanScore++
      }
      break
  }

  scoreboardDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`

  if (humanScore === 5) {
    resultsDiv.innerHTML += '\nYou win the game!'
    resetGame()
  } else if (computerScore === 5) {
    resultsDiv.innerHTML += '\nComputer wins the game!'
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
