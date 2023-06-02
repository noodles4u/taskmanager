// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// test json

let menu =
  'Welcome to your task manager,Press:\n 1. to see all your tasks\n 2. to add a task\n 3. to delete a task\n 4. to mark a task as done\n 5. to Exit the task manager';

// let tasks = {};

// fs.readFile('./helloraad.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.log('File read failed:', err);
//     return;
//   }
//   console.log('File data:', jsonString);
// });

// tasks = fs.readFileSync('./helloraad.json');

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

const writeJSON = () => {
  var json = JSON.stringify(tasks);

  fs.writeFile('helloraad.json', json, function (err) {
    if (err) throw err;
    // console.log('complete');
  });
};
// Adding task to array
let addTask = () => {
  rl.question(console.log('New task?'), (newItem) => {
    tasks.push({ item: `${newItem}`, status: false });
    console.log(tasks);
    writeJSON();
    loopMenu();
  });
};

/// raad

let removeTask = () => {
  rl.question('Enter the task you want to remove: ', (userInput) => {
    userInput = userInput.toLowerCase();
    let id = tasks.findIndex((task) => task.item.toLowerCase() === userInput);
    if (id !== -1) {
      tasks.splice(id, 1);
      console.log('Task has been removed. Left over tasks: ', tasks);
    } else {
      console.log('Task not found');
    }
    writeJSON();
    loopMenu();
  });
};

let changeStu = () => {
  rl.question('Enter the task you want to change status of: ', (taskName) => {
    taskName = taskName.toLowerCase();
    let Taskid = tasks.findIndex(
      (task) => task.item.toLowerCase() === taskName,
    );
    if (Taskid !== -1) {
      rl.question('Enter the new status: ', (newStatus) => {
        tasks[Taskid].status = newStatus;
        console.log('Task status has been updated. Updated tasks: ', tasks);
        writeJSON();
        loopMenu();
      });
    } else {
      console.log('Task not found');
    }
  });
  writeJSON();
  loopMenu();
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
        changeStu();
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
