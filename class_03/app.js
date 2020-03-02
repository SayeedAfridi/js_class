/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore, isGamePlaying
var diceDOM = document.querySelector('.dice')

function init() {
    roundScore = 0
    scores = [0, 0]
    activePlayer = 0
    isGamePlaying = true
    document.getElementById('current-0').textContent = roundScore
    document.getElementById('current-1').textContent = roundScore
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    document.getElementById('curr-0').style.color = '#222'
    document.getElementById('curr-1').style.color = '#222'
    document.getElementById('curr-0').style.color = 'white'
}

init()
// var dice = Math.floor(Math.random() * 6) + 1

// document.getElementById('current-0').textContent = dice

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isGamePlaying) {
        //01. Generate Randomnumber
        var dice = Math.floor(Math.random() * 6) + 1

        //02. display the dice
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'
        //03. update ui
        if (dice > 1) {
            //add score
            roundScore += dice
            document.getElementById(
                'current-' + activePlayer
            ).textContent = roundScore
        } else {
            //next player
            nextPlayer()
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isGamePlaying) {
        //add current score to globalscore
        scores[activePlayer] += roundScore
        //update the ui
        document.getElementById('score-' + activePlayer).textContent =
            scores[activePlayer]
        //check if the player wins
        if (scores[activePlayer] >= 20) {
            //some task
            document.getElementById('name-' + activePlayer).textContent =
                'Winner!'
            diceDOM.style.display = 'none'
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.add('winner')
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.remove('active')
            isGamePlaying = false
        } else {
            nextPlayer()
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init)

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
    roundScore = 0
    document.getElementById('current-0').textContent = roundScore
    document.getElementById('current-1').textContent = roundScore
    diceDOM.style.display = 'none'
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.getElementById('curr-0').style.color = '#222'
    document.getElementById('curr-1').style.color = '#222'
    document.getElementById('curr-' + activePlayer).style.color = 'white'
}
