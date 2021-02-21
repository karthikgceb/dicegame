'use strict';



let score0El=document.getElementById('score--0');
let score1El=document.getElementById('score--1');
let currentScore0El =document.getElementById('current--0');
let currentScore1El =document.getElementById('current--1');
let player0El=document.querySelector('.player--0');
let player1El=document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew= document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const name0El= document.getElementById('name--0');
const name1El= document.getElementById('name--1');
let scores,currentScore,activePlayer,playing;


const newGame = () => {
scores = [0,0];
currentScore=0;
activePlayer=0;
playing=true;
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
}

 const switchPlayer =  () => {
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer=activePlayer===0 ? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

newGame();

btnRoll.addEventListener('click',function(){
    if(playing){
    //generate the random number
    let dice = Math.trunc(Math.random()*6)+1;

    diceEl.src=`dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    
    //check the dice condition or rules
    if(dice !== 1){
    currentScore+=dice;
    diceEl.classList.remove('hidden');
    

    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
  //dice===1 swirch the player
   else{
    switchPlayer();
}
    }
});


btnHold.addEventListener('click',function(){
   //add the current score into player score
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

   
   if (scores[activePlayer] >= 100) {
    // Finish the game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.getElementById(`name--${activePlayer}`).textContent='Win😍';
       currentScore=0;
      document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   }
   else{
       switchPlayer();
   }
});

btnNew.addEventListener('click',function(){
//new game 
  newGame();
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  name0El.textContent='Player 1';
  name1El.textContent='Player 2';

})