const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let l1 = [];
    for (let i = 0; i < 5; i++) {
      if (all[i].dueDate === yesterday) {
        l1.push(all[i]);
      }
    }
    return l1;
  };

  const dueToday = () => {
    let l2 = [];
    for (let i = 0; i < 5; i++) {
      if (all[i].dueDate === today) {
        l2.push(all[i]);
      }
    }
    return l2;
  };

  const dueLater = () => {
    let l3 = [];
    for (let i = 0; i < 5; i++) {
      if (all[i].dueDate === tomorrow) {
        l3.push(all[i]);
      }
    }
    return l3;
  };

  const toDisplayableList = (list) => {
    n = list.length;
    x = formattedDate(new Date());
    l = "";
    if (list[0].dueDate === x) {
      for (let i = 0; i < n; i++) {
        if (list[i].completed === true) {
          l += "[x] " + list[i].title;
        } else {
          l += "[ ] " + list[i].title;
        }
        if (i < n - 1) {
          l += "\n";
        }
      }
    } else {
      for (let i = 0; i < n; i++) {
        l += "[ ] " + list[i].title + " " + list[i].dueDate;
        if (i < n - 1) {
          l += "\n";
        }
      }
    }
    return l;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
