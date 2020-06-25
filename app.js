
var score1=0;
var score2=0;
var score=[0,0];
var currentscore1,currentscore2=0;
var roundscore=0;
var activePlayer=0;
var dice=0;
var gamePlaying=true;

document.querySelector('.dice').style.display = 'none'; 
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

    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    dice=Math.floor(Math.random()*6)+1;
    var diceDom=document.querySelector(".dice");
    diceDom.style.display="block";
    diceDom.src="dice-"+ dice +".png";
        if(dice>1){
            roundscore+=dice;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
        }
        else{
        
        nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
        if(gamePlaying){
        score[activePlayer] += roundscore;
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
       
            if(score[activePlayer]>= 30){
                document.querySelector('#name-'+activePlayer).textContent ='Winner !';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                gamePlaying=false;

            }else{
                //Next Player
                nextPlayer();
            }
        }
    });

    function init(){
		scores = [0,0];
		roundScore = 0;
        activePlayer = 0;
        document.querySelector('.dice').style.display = 'none';
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
    }

    document.querySelector('.btn-new').addEventListener('click',init);
    
