 
<main>
  <div class="wrapper">
    <div class="buttons">
      <button class="rpsButton" value="Rock">✊</button>
      <button class="rpsButton" value="Gun">🔫</button>
      <button class="rpsButton" value="Lightning">🌩</button>
      <button class="rpsButton" value="Devil">👹</button>
      <button class="rpsButton" value="Water">💧</button>
      <button class="rpsButton" value="Air">🍃</button>
      <button class="rpsButton" value="Paper">🤚</button>
      <button class="rpsButton" value="Sponge">🧽</button>
      <button class="rpsButton" value="Wolf">🐺</button>
      <button class="rpsButton" value="Tree">🌳</button>
      <button class="rpsButton" value="Human">👤</button>
      <button class="rpsButton" value="Snake">🐍</button>
      <button class="rpsButton" value="Scissors">✌</button>
      <button class="rpsButton" value="Fire">🔥</button>
    </div>
    <button id="endGameButton">🛑</button>
  </div>
  
  <div class="resultContainer">
    <div id="result"></div>
  </div>

  <div class="resultContainerPlayer1">
    <div id="player1-score"></div>
    <div id="hands1">
      
    </div>

  <div class="resultContainerPlayer2">
    <div id="player2-score"></div>
  </div> <div id="hands2"></div>
  </div>

  <script>
   /*
  Rock Paper Scissors SOLUTION 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors', 'Fire', 'Sponge', 'Wolf', 'Gun', 'Lightning', 'Devil', 'Water', 'Air', 'Tree', 'Human', 'Snake']
  let player2Choice = rpsChoices[Math.floor(Math.random() * 14)]
  return player2Choice
}

// ** getResult compares playerChoice & player2Choice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, player2Choice) {
  // return the result of score based on if you won, drew, or lost
  
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === player2Choice) {
    score = 0

  
  } else if (playerChoice === 'Rock' && (player2Choice === 'Scissors'|| player2Choice ==='Sponge'|| player2Choice ==='Wolf'|| player2Choice ==='Tree'|| player2Choice ==='Human'|| player2Choice ==='Snake'|| player2Choice ==='Fire')) {
    score = 1
    score2 = 0
    

  } else if (playerChoice === "Paper" && (player2Choice === "Rock"|| player2Choice ==="Air"|| player2Choice ==="Water"|| player2Choice ==="Devil"|| player2Choice ==="Lightning"|| player2Choice ==="Gun")) {
    score = 1
    score2 = 0

  }else if (playerChoice === "Scissors" && (player2Choice === "Snake"|| player2Choice ==="Human"|| player2Choice ==="Tree"|| player2Choice ==="Wolf"|| player2Choice ==="Sponge"|| player2Choice ==="Paper"|| player2Choice ==="Air")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Snake" && (player2Choice === "Paper"|| player2Choice ==="Air"|| player2Choice ==="Human"|| player2Choice ==="Tree"|| player2Choice ==="Wolf"|| player2Choice ==="Sponge"|| player2Choice ==="Water")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Human" && (player2Choice === "Tree"|| player2Choice ==="Wolf"|| player2Choice ==="Sponge"|| player2Choice ==="Paper"|| player2Choice ==="Air"|| player2Choice ==="Water")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Tree" && (player2Choice === "Wolf"|| player2Choice ==="Sponge"|| player2Choice ==="Water"|| player2Choice ==="Paper"|| player2Choice ==="Air"|| player2Choice ==="Devil")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Wolf" && (player2Choice === "Sponge"|| player2Choice ==="Paper"|| player2Choice ==="Air"|| player2Choice ==="Water"|| player2Choice ==="Devil"|| player2Choice ==="Lightning")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Sponge" && (player2Choice === "Paper"|| player2Choice ==="Air"|| player2Choice ==="Water"|| player2Choice ==="Devil"|| player2Choice ==="Lightning"|| player2Choice ==="Gun")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Air" && (player2Choice === "Water"|| player2Choice ==="Devil"|| player2Choice ==="Lightning"|| player2Choice ==="Gun"|| player2Choice ==="Rock"|| player2Choice ==="Fire")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Water" && (player2Choice === "Devil"|| player2Choice ==="Lightning"|| player2Choice ==="Gun"|| player2Choice ==="Rock"|| player2Choice ==="Fire"|| player2Choice ==="Scissors")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Devil" && (player2Choice === "Lightning"|| player2Choice ==="Gun"|| player2Choice ==="Rock"|| player2Choice ==="Fire"|| player2Choice ==="Scissors"|| player2Choice ==="Snake")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Lightning" && (player2Choice === "Gun"|| player2Choice ==="Rock"|| player2Choice ==="Fire"|| player2Choice ==="Scissors"|| player2Choice ==="Snake"|| player2Choice ==="Human")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Gun" && (player2Choice === "Rock"|| player2Choice ==="Fire"|| player2Choice ==="Scissors"|| player2Choice ==="Snake"|| player2Choice ==="Tree"|| player2Choice ==="Human")) {
    score = 1
    score2 = 0

  } else if (playerChoice === "Fire" && (player2Choice === "Paper"|| player2Choice ==="Snake"|| player2Choice ==="Human"|| player2Choice ==="Tree"|| player2Choice ==="Wolf"|| player2Choice ==="Sponge")) {
    score = 1
    score2 = 0

  } else {
    score = 0
    score2 = 1 // Otherwise human loses (aka set score to -1)
  }

  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, player2Choice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  
  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  let player1Score = document.getElementById('player1-score')
  player1Score.innerText = `${Number(player1Score.innerText) + score}`
  hands1.innerText = `👱 ${playerChoice}`

  let player2Score = document.getElementById('player2-score')
  player2Score.innerText = `${Number(player2Score.innerText) + score2}`
  hands2.innerText = `🤖 ${player2Choice}`
  
  let hands = document.getElementById('hands')
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const player2Choice = getComputerChoice()
  const score = getResult(playerChoice.value, player2Choice)
  showResult(score, playerChoice.value, player2Choice)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let rpsButtons = document.querySelectorAll('.rpsButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let player1Score = document.getElementById('player-score')
  let player2Score = document.getElementById('player-score')
  let hands1 = document.getElementById('hands1')
  let hands2 = document.getElementById('hands2')
  let result = document.getElementById('result')
  player1Score.innerText = ''
  player2Score.innerText = ''
  hands1.innerText = ''
  hands2.innerText = ''
  result.innerText = ''
}

playGame()
  </script>
</main>

<body>
<style>
/* body{
  background-color: #2c3e50;	
  font-family: 'Helvetica';
  color:white;
  cursor: url("static/trollface.png"), auto;
} */

ul {
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
}

li {
float: left;
}

li a {
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
}

li a:hover:not(.active) {
background-color: #2b2b2b ;
}

.active {
background-color: #1e2a37;
}

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin:0;
}

.wrapper {
  background: #1c1c1c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.buttons {
  margin-top: 100px;
    display: grid;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    grid-template-columns: auto auto auto auto auto auto auto;
    padding: 10px;
}

button {
  height: 100px;
  width: 100px;
  font-size: 48px;
  border-radius: 30px;
  cursor: pointer;
  
}

.resultContainerPlayer1 {
  font-size: 2rem;
  text-align: center;
  margin-top: -200px;
  margin-left: -80%;
}

.resultContainerPlayer2 {
  font-size: 2rem;
  text-align: center;
  margin-top: -50px;
  margin-left: 0%;
}

.resultContainer{
  font-size: 2rem;
  text-align: center;
  margin-top: 20px;
}
</style>
</body>