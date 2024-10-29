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

let getHumanChoice = (humanChoice) => (humanChoice = prompt('Please choose rock, paper, or scissors'))

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()

  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  }

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'paper') {
        console.log('Computer wins! (Paper beats rock)')
        computerScore++
      } else if (computerChoice === 'scissors') {
        console.log('You win! (Rock beats scissors)')
        humanScore++
      }
      break

    case 'paper':
      if (computerChoice === 'scissors') {
        console.log('Computer wins! (Scissors beats paper)')
        computerScore++
      } else if (computerChoice === 'rock') {
        console.log('You win! (Paper beats rock)')
        humanScore++
      }
      break

    case 'scissors':
      if (computerChoice === 'rock') {
        console.log('Computer wins! (Rock beats scissors)')
        computerScore++
      } else if (computerChoice === 'paper') {
        console.log('You win! (Scissors beats paper)')
        humanScore++
      }
      break
  }
}

function playGame(times) {
  for (let i = 0; i < times; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
  }

  if (humanScore > computerScore) {
    console.log('You win the game!')
  } else if (humanScore < computerScore) {
    console.log('Computer wins the game!')
  } else {
    console.log("It's a tie!")
  }
}

playGame(5)
