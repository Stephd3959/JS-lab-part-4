
//global
var userHealth = 40;
var grantHealth = 10;
var wins = 0;


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
var attackButton=document.getElementById("attackButton");
attackButton.onclick=attack;
function attack() {
  userHealth -= getDamage(5);
  grantHealth -= getDamage(3);
  console.log(`The user has ${userHealth} health remaining`);
  console.log(`Grant has ${grantHealth} health remaining`);

  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;
  
  var enemyHealthProgressBar = document.getElementsByClassName("enemyHealth")[0];
  enemyHealthProgressBar.value = grantHealth;

  if (grantHealth <= 0) {
    wins++;
    grantHealth = 10;
    var message = `The user has 1 victory`
    if (wins > 1) {
      var message = `The user has 1 victory`
    }
  }
}

function startGame() {
  var user = prompt('Please enter your name');
  setPlayerName(user);
  // startCombat(user);
  }

  function getDamage(max){
    return getRandom(max)
    }
    function getRandom (max) {
     return Math.floor(Math.random() * max) + 1;
      }
 
// //Convert the variables relating to Grant and the user’s character into objects. Add an option to heal your character.
// //this is an object
// class Computer {
//   constructor(name, health){
//     this.name= name;
//     this.health = health;
//   }
//   //generateAttackDamage returns a random number between 1 and 3.
//    generateAttackDamage(){
//     return getRandom(5)
//   }
// }
// //The extends keyword is used in class declarations or class expressions to create a class which is a child of another class.
// class Character extends Computer{
//   constructor (name, health, healsRemaining){
//     //The super keyword is used to access and call functions on an object's parent.
//     super (name,health);
//     this.healsRemaining = healsRemaining;
//     this.wins = 0;
//   }
//  //methods 
//  generateAttackDamage(){
//     return getRandom(3);
//   }
//   heal(){
//     //adds a random number between 1 and 10 to the character’s health . Also
// //subtracts one from healsRemaining . (hint: you should use ` this `).
//     this.health += getRandom(10);
//     this.healsRemaining--;
//   }
//  }

// var TOTAL_WINS = 5;
// var COMPUTER_STARTING_HEALTH = 10;

// startGame();

// // function startGame(){
// //   // var question = prompt("Do you want to play a game?");
// //   if (question.toLowerCase() === 'yes' || 'y'){
// //     var userName = prompt("What is your name?");
// //     startCombat(userName);
// //   }
// // }

// function startCombat(userName){

//   var grant = new Computer('Grant', COMPUTER_STARTING_HEALTH);
//   var user = new Character(userName, 40, 2);
// //new Charater (userName, heath, healsRemaining)
//   while (user.wins < TOTAL_WINS && user.health > 0){
//     var shouldAttack = prompt("attack, heal or quit");

//     if (shouldAttack === 'quit'){
//       console.log('You selected quit thanks for playing')
//       return;
//     }
//     if (shouldAttack === 'attack'){
//       user.health -= grant.generateAttackDamage();
//       grant.health -= user.generateAttackDamage();
//     }
//     if (shouldAttack === "heal"){
//       user.heal();
//       // grant.health -= user.generateAttackDamage();
//       console.log(`${user.name} has healed and has ${user.health}`);
//     }
//     console.log(user.name + ' has ' + user.health + ' health left');
//     console.log(`${grant.name} has ${grant.health} health left`);

//     if (grant.health < 1){
//       user.wins++;
//       grant.health = COMPUTER_STARTING_HEALTH;
//       console.log(`${user.name} has ${user.wins} win(s)`);
//     }

//     if (user.healsRemaining === 0){
//       grant.generateAttackDamage();
//       user.generateAttackDamage();
//       console.log(`${user.name} has ${user.health} health left`);
//       console.log(`Grant has ${grant.health} health left`);
//     }

//   }

//   if (user.wins === TOTAL_WINS){
//     console.log(`${user.name} has ${user.wins} wins`);
//   } else {
//     console.log('Grant Wins');
//   }
// }

// function getRandom (max) {
//   return Math.floor(Math.random() * max) + 1;
// }

// function move() {
//   var elem = document.getElementById("attackButton"); 
//   var width = 1;
//   var id = setInterval(frame, 10);
//   function frame() {
//       if (width >= 100) {
//           clearInterval(id);
//       } else {
//           width++; 
//           elem.style.width = width + '%'; 
//       }
//   }
// }
