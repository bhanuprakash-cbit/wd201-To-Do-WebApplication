const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let l1 = [];
    for (let i = 0; i < all.length; i++) {
      if (
        all[i].dueDate ===
        new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      ) {
        l1.push(all[i]);
      }
    }
    return l1;
  };

  const dueToday = () => {
    let l2 = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate === new Date().toISOString().slice(0, 10)) {
        l2.push(all[i]);
      }
    }
    return l2;
  };

  const dueLater = () => {
    let l3 = [];
    for (let i = 0; i < all.length; i++) {
      if (
        all[i].dueDate ===
        new Date(Date.now() + 86400000).toISOString().slice(0, 10)
      ) {
        l3.push(all[i]);
      }
    }
    return l3;
  };

  const toDisplayableList = (list) => {
    let n = list.length;
    let x = new Date().toISOString().split("T")[0];
    let l = "";
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
    console.log(l);
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

module.exports = todoList;
