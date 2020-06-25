
var score1=0;
var score2=0;
var score=[0,0];
var currentscore1,currentscore2=0;
var roundscore=0;
var activePlayer=0;
var dice=0;
var gamePlaying=true;
var winnerValue;

document.getElementById('dice-1').style.display = 'none'; 
document.getElementById('dice-2').style.display = 'none'; 
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-1').style.display = 'block';
	document.getElementById('dice-2').style.display = 'block';
	document.getElementById('dice-1').src = 'dice-' + dice1 +'.png';
	document.getElementById('dice-2').src = 'dice-' + dice2 +'.png';

    if(dice1 === 6 && dice2 === 6){
		score[activePlayer] = 0;
		document.querySelector('#score-'+activePlayer).textContent = '0';
		nextPlayer();
    }else {
        if(dice1 !==  1 && dice2 !== 1 ){
		// Add Score
        roundscore += dice1 + dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundscore;
        }else{
            //Next Player
            nextPlayer();
        }
	 }
    }
   
});

document.querySelector('.btn-hold').addEventListener('click',function(){
        if(gamePlaying){
            var input = document.querySelector('.final-score').value;

            if(input){
                winnerValue = input;
            }
            else{
                winnerValue = 100;
            }

        score[activePlayer] += roundscore;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
       
        if(score[activePlayer] >= winnerValue){
            document.querySelector('#name-'+activePlayer).textContent ='Winner !';
                document.getElementById('dice-1').style.display = 'none';
                document.getElementById('dice-2').style.display = 'none';
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                gamePlaying=false;
                //var x=document.querySelector('.final-score');
                //x.value=score[activePlayer];
        
            }else{
                //Next Player
                nextPlayer();
            }
        }
    });

    function init(){
		score = [0,0];
		roundscore = 0;
        activePlayer = 0;
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        var x=document.querySelector('.final-score');
        x.value=x.defaultValue;
		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.getElementById('name-0').textContent = 'Player 1';
	    document.getElementById('name-1').textContent = 'Player 2';

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('.player-0-panel').classList.add('active');
        gamePlaying=true;   

    }

    document.querySelector('.btn-new').addEventListener('click',init);

    
