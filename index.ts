import inquirer from 'inquirer';

interface Enemy {
  name: string;
  health: number;
}

const player = {
  health: 100,
  lives: 3,
  defend: false,
};

const enemies: Enemy[] = [
  {
    name: 'Goblin',
    health: 20,
  },
  {
    name: 'Skeleton',
    health: 30,
  },
  {
    name: 'Dragon',
    health: 100,
  },
];

async function playGame() {
  while (player.lives > 0 && player.health > 0) {
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(`You encountered a ${enemy.name} with ${enemy.health} health.`);

    const answer = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: player.defend ? ['Attack', 'Run', 'Defend'] : ['Attack', 'Run'],
    });

    switch (answer.action) {
      case 'Attack':
        enemy.health -= 10;
        console.log(`You attacked the ${enemy.name}! It now has ${enemy.health} health.`);
        if (enemy.health <= 0) {
          console.log(`You defeated the ${enemy.name}!`);
        }
        break;
      case 'Defend':
        player.defend = true;
        console.log('You defend yourself!');
        break;
      case 'Run':
        player.lives -= 1;
        console.log(`You ran away! You have ${player.lives} lives left.`);
        break;
    }

    if (enemy.health > 0 && !player.defend) {
      player.health -= 10;
      console.log(`The ${enemy.name} attacked you! Your health is now ${player.health}.`);
    }

    player.defend = false;
  }

  if (player.lives === 0) {
    console.log('Game over! You have no more lives.');
  } else {
    console.log('Congratulations! You won the game!');
  }
}

playGame();
