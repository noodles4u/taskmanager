// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let menu =
  'Welcome to your task manager,Press:\n 1. to see all your tasks\n 2. to add a task\n 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager';

let tasks = [
  {
    item: 'Empty Dishwasher',
    status: false,
  },
  {
    item: 'Do the laundry',
    status: false,
  },
];

// Adding task to array
let addTask = () => {
  rl.question(console.log('New task?'), (newItem) => {
    tasks.push({ item: `${newItem}`, status: false });
    console.log(tasks);
    loopMenu();
  });
};

/// raad

let removeTask = () => {
  rl.question('Enter the task you want to remove: ', (userInput) => {
    let id = tasks.findIndex((task) => task.item === userInput);
    if (id !== -1) {
      tasks.splice(id, 1);
      console.log('Task has been removed. Left over tasks: ', tasks);
    } else {
      console.log('Task not found');
    }
    loopMenu();
  });
};

const loopMenu = () => {
  rl.question(console.log(menu), (number) => {
    switch (parseInt(number)) {
      case 1:
        console.log(tasks);

        loopMenu();
        break;

      case 2:
        addTask();
        break;

      case 3:
        removeTask();
        break;

      case 4:
        console.log('number 4');
        break;

      case 5:
        console.log('Bye bye');
        rl.close();
        break;

      default:
        console.log('Wrong number pal, try again!');
    }
  });
};
loopMenu();
