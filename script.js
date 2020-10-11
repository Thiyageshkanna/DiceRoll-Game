

var scores, roundScore, activePlayer, gamePlay;


initialization();

document.querySelector(".roll-dice").addEventListener("click", function () {
   if(gamePlay){
      // 1.random number
  var dice = Math.floor(Math.random() * 6 + 1);
  //  2.click element
  var diceDom = document.querySelector("#dice-img");
  diceDom.style.visibility = "visible";
  diceDom.src = "Images/dice-" + dice + ".png";
  //  add score and switch players

  if (dice > 1) {
    // add score
    roundScore += dice;
    document.querySelector(".current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
   }
 
});

// hold button and its function
document.querySelector(".hold").addEventListener("click", function () {
    if(gamePlay){
      // to hold values
  scores[activePlayer] += roundScore;
  // update in web page
  document.querySelector(".score-" + activePlayer).textContent =
    scores[activePlayer];
  // winner
  if (scores[activePlayer] >= 20) {
    document.querySelector(".name-" + activePlayer).textContent = "Winner!";
    document.querySelector("#dice-img").style.visibility = "hidden";

    document.querySelector(".name-" + activePlayer).classList.add("winner");
    gamePlay=false;


    document.querySelector(".abcd-" + activePlayer).classList.remove("abcd");

  } 
  // next player
      nextPlayer();

    }
  
  
});

// next player function DRY priciple (don't repeat yourself)

function nextPlayer() {
  // move to next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.querySelector(".current-0").textContent = 0;
  document.querySelector(".current-1").textContent = 0;
  document.querySelector(".abcd-0").classList.toggle("abcd");
  document.querySelector(".abcd-1").classList.toggle("abcd");
}

// new game

document.querySelector(".newgame").addEventListener("click",initialization);




function initialization(){
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlay=true;


document.querySelector("#dice-img").style.visibility = "hidden";


// display score and current 0 using js

document.querySelector(".score-0").textContent = "0";
document.querySelector(".score-1").textContent = "0";
document.querySelector(".current-0").textContent = "0";
document.querySelector(".current-1").textContent = "0";

document.querySelector(".name-0").textContent = "Player 1";
document.querySelector(".name-1").textContent = "Player 2";

document.querySelector(".name-0").classList.remove("winner");
document.querySelector(".name-1").classList.remove("winner");


};