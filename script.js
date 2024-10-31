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

  resultsDiv.innerHTML = `
    <div>
      <div>Human:</div>
      <span class="choice-emoji">${choiceEmojis[humanChoice]}</span>
    </div>
    <div>
      <div>Computer:</div>
      <span class="choice-emoji">${choiceEmojis[computerChoice]}</span>
    </div>
    <div>vs</div>
  `

  if (humanChoice === computerChoice) {
    resultsDiv.innerHTML += "<div>It's a tie!</div>"
  }

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'paper') {
        resultsDiv.innerHTML += '<div>Computer wins!</div>'
        computerScore++
      } else if (computerChoice === 'scissors') {
        resultsDiv.innerHTML += '<div>You win!</div>'
        humanScore++
      }
      break

    case 'paper':
      if (computerChoice === 'scissors') {
        resultsDiv.innerHTML += '<div>Computer wins!</div>'
        computerScore++
      } else if (computerChoice === 'rock') {
        resultsDiv.innerHTML += '<div>You win!</div>'
        humanScore++
      }
      break

    case 'scissors':
      if (computerChoice === 'rock') {
        resultsDiv.innerHTML += '<div>Computer wins!</div>'
        computerScore++
      } else if (computerChoice === 'paper') {
        resultsDiv.innerHTML += '<div>You win!</div>'
        humanScore++
      }
      break
  }

  scoreboardDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`

  if (humanScore === 5) {
    resultsDiv.innerHTML += '<div>You win the game!</div>'
    resetGame()
  } else if (computerScore === 5) {
    resultsDiv.innerHTML += '<div>Computer wins the game!</div>'
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
