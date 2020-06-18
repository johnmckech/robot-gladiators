
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//console.log(enemyNames)
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//
//console.log(enemyNames[2]);
//console.log(enemyNames.length);
//for(var i = 0; i < enemyNames.length; i++) {
  //console.log(enemyNames[i]);
  //console.log(i);
  //console.log(enemyNames[i] + " is at " + i + " index");
//}
//
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
  // Alert users that they are starting the round
  while(enemyHealth > 0) {
      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

};

  }


for(var i = 0; i < enemyNames.length; i++) {
  pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  //call fight function with enemy robot
  fight(pickedEnemyName);
}

  


