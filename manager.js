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
    status: 'unfinished',
  },
  {
    item: 'Do the laundry',
    status: 'unfinished',
  },
];

const showtasks = () => {
  return menu;
};
showtasks();

// Adding task to array
const addTask = () => {
  rl.question(console.log('New task?'), (newItem) => {
    tasks.push({ item: `${newItem}`, status: 'unfinished' });

    rl.close();

    return tasks;
  });
};
addTask();

// rl.question(console.log(showtasks()), (number) => {
//   switch (parseInt(number)) {
//     case 1:
//       console.log(tasks);
//       break;

//     case 2:
//       console.log(addTask());
//       break;

//     case 3:
//       console.log('number 3');
//       break;

//     case 4:
//       console.log('number 4');
//       break;

//     case 5:
//       console.log('number 5');
//       break;
//     default:
//       console.log('Wrong number pal, try again!');
//   }

//   rl.close();
// });

// let tasksProperties = tasks.map((newTask) => {
//   let Properties = {
//     task: tasks.item,
//     status: 'Unfinished',
//   };
//   tasks.item.push(newTask);
//   return;
// });

// tasksProperties();
