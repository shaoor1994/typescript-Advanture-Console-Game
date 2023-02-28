# typescript-Advanture-Console-Game
In this example, we define an Enemy interface and an array of enemies. We also define a player object with a defend property, which is set to false by default.

Inside the playGame() function, we loop through the game while the player has lives and health remaining. In each iteration, we choose a random enemy from the enemies array and prompt the player with choices.

If the player chooses to defend, we set the defend property to true. On the next iteration, we check if the player is defending and if so, we include the Defend option in the choices. If the player is not defending, we skip the Defend option.

If the player chooses to attack, we subtract 10 from the enemy's health and log the result. If the enemy's health reaches 0 or less, we log a message saying the enemy was defeated.

If the player chooses to run, we subtract 1 from the player's lives property and log the result.

If the enemy is still alive and the player is not defending, we subtract 10 from the player's health and log the result.

After each iteration, we set the defend property back to false.

You can customize the enemies, player, and game logic to fit your adventure game.