tasks = [];

const newTask = (task) => {
  return { task };
}

function addNewTask() {
  let taskInp = document.querySelector('#todoEl');
  let task = document.querySelector('#todoEl').value;

  if (task && task.length > 0) {
    let nTask = newTask(task);
    tasks.push(nTask.task);
    taskInp.value = "";
    displayTasks(tasks);
  } else {
    taskInp.placeholder = "Please fill the input";
    console.log("Something doesn't work");
  }
}

function displayTasks(data) {
  let htmlToAdd = "";
  if (data && data.length > 0) {
    data.forEach(task => {
      htmlToAdd += `
      <div class="task">
          <p>${task}</p>
        </div>
      `;
    });
    if (document.querySelector('.tasks__container').classList.contains('textStyle')) {
      document.querySelector('.tasks__container').classList.remove('textStyle');
    }
    document.querySelector('.tasks__container').innerHTML = htmlToAdd;
  } else {
    document.querySelector('.tasks__container').innerHTML = "Nothing to do..";
    document.querySelector('.tasks__container').classList.add('textStyle');
  }
}

displayTasks(tasks);
