
//global
var userHealth = 40;
var grantHealth = 10;
var playerWins = 0;
var playerHealCount =2;


// Hook up the start button
var startButton = document.getElementById("startButton");
startButton.onclick = function () {
  document.getElementById("game-wrapper").style.display = "block";
  document.getElementById("start-wrapper").style.display = "none";
  startGame();
}

// Define a function to update the player name
var playerName = document.getElementById("playerName");
function setPlayerName(user) {
  playerName.innerText = user;
}

// Hook up the attack button
var attackButton = document.getElementById("attackButton");
attackButton.onclick = attack;
function attack() {
  userHealth -= getDamage(5);
  grantHealth -= getDamage(3);
document.getElementById("statusText").innerText=`The user has ${userHealth} health remaining Grant has ${grantHealth} health remaining`;
  // console.log(`);
  // console.log(`Grant has ${grantHealth} health remaining`);

  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;

  var enemyHealthProgressBar = document.getElementsByClassName("enemyHealth")[0];
  enemyHealthProgressBar.value = grantHealth;

  var playerWinsProgressBar = document.getElementsByClassName("playerWins")[0];
  playerWinsProgressBar.value = playerWins;

  
  if (grantHealth <= 0) {
    playerWins++;
    grantHealth = 10;
       }
  }

//h00k up heal
 var healButton=document.getElementById("healButton");
  healButton.onclick=heal;
function heal() {
  if(playerHealCount >0){
  userHealth += getRandom(10);
  playerHealCount--;
  playerHealCountProgressBar.value = playerHealCount;
  document.getElementById("statusText").innerText=`the user has healed and has ${userHealth}`;
    }
  }  
var playerHealCountProgressBar = document.getElementsByClassName("playerHealCount")[0];
  // playerHealCountProgressBar.value = playerHealCount; 

// button
// var playStatusMessage=document.getElementsByTagName("p");
// var statusUpdate=document.createTextNode(`${playerName}` +  `${userHealth}`);
// p.appendChild (playStatusMessage); 
// document.write("This is a test" + `${userHealth}`);

  //hook up Quit 
var quitButton = document.getElementById("quitButton");
quitButton.onclick = quit;
function quit(){
  document.getElementById("game-wrapper").style.display = "none";
  document.getElementById("start-wrapper").style.display = "block";
  alert("You have quit the game. Have a nice day.")
  return;
}

function startGame() {
  var user = prompt('Please enter your name');
  setPlayerName(user);
  // startCombat(user);
}

function getDamage(max) {
  return getRandom(max)
}
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}




 



