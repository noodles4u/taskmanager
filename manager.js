// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let menu =
  'Welcome to your task manager,Press:\n 1. to see all your tasks\n 2. to add a task\n 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager';

let tasks = ['Wash the dishes', 'Fold the laundry'];

const showtasks = () => {
  console.log(menu);
};

rl.question(showtasks(), (number) => {
  switch (parseInt(number)) {
    case 1:
      console.log(tasks);
      break;

    case 2:
      console.log('number 2');
      break;

    case 3:
      console.log('number 3');
      break;

    case 4:
      console.log('number 4');
      break;

    case 5:
      console.log('number 5');
      break;
    default:
      console.log('Wrong number pal, try again!');
  }

  rl.close();
});
