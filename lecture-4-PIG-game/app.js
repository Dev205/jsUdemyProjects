/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScores, activePlayer, dice, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        //1 need random number
        dice = Math.floor(Math.random() * 6) + 1; //Random between 0 and 5 + 1 no decimal
        let diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        //2 display result
        if(dice !== 1){
            //add to round score
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        }else{
            //switch player
            nextPlayer()
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
        //add the current round score to global score
        scores[activePlayer] += roundScores;
        //update ui
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        //check win condition
        if(scores[activePlayer] >= 100){
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying =false;
        }else{
            //switch player
            nextPlayer()
        }
    }
});

function nextPlayer() {
    //switch player
    activePlayer = (activePlayer === 0)?1:0;
    roundScores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0' ).textContent = 'Player 1';
    document.getElementById('name-1' ).textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}















