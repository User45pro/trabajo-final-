

/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}

*/



let tasks = []; // Array para almacenar las tareas

// Función para agregar una tarea
function addTask(title) {
  const task = {
    id: tasks.length + 1, // El ID es simplemente el siguiente número en la lista
    title: title,
    completed: false
  };
  tasks.push(task);
  displayTasks(tasks); // Mostrar todas las tareas después de agregar una nueva
}

// Función para mostrar las tareas
function displayTasks(tasksToDisplay) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Limpiar la lista actual
  for (let task of tasksToDisplay) {
    const li = document.createElement('li');

    // Crear el checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', function() {
      task.completed = !task.completed; // Cambiar el estado de completado de la tarea
    });

    li.appendChild(checkbox); // Agregar el checkbox al elemento de la lista

    // Agregar el título de la tarea
    const span = document.createElement('span');
    span.textContent = task.title;
    li.appendChild(span);

    taskList.appendChild(li);
  }
}

// Evento para el botón de agregar
document.getElementById('agregar').addEventListener('click', function() {
  const entrada = document.getElementById('entrada');
  addTask(entrada.value);
  entrada.value = ''; // Limpiar el input
});

// Eventos para los botones de filtrado
document.getElementById('btnAll').addEventListener('click', function() {
  displayTasks(tasks); // Mostrar todas las tareas
});
document.getElementById('btnActive').addEventListener('click', function() {
  const activeTasks = tasks.filter(task => !task.completed); // Filtrar las tareas activas
  displayTasks(activeTasks);
});
document.getElementById('btnCompleted').addEventListener('click', function() {
  const completedTasks = tasks.filter(task => task.completed); // Filtrar las tareas completadas
  displayTasks(completedTasks);
});


// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
function completeTask() {

}


// Función para borrar una tarea específica
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  displayTasks(tasks); // Actualizar la lista de tareas
}

// Función para borrar todas las tareas completadas
function deleteAllCompleted() {
  tasks = tasks.filter(task => !task.completed);
  displayTasks(tasks); // Actualizar la lista de tareas
}
// Agregar evento para borrar tareas completadas individualmente
document.getElementById('taskList').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON' && e.target.classList.contains('delete-btn')) {
    const taskId = parseInt(e.target.dataset.taskId, 10);
    deleteTask(taskId);
  }
});

// Agregar botón de borrar todas las tareas completadas

// Evento para el botón de borrar todas las tareas completadas
document.getElementById('deleteAllCompleted').addEventListener('click', function() {
  deleteAllCompleted();
});

// Función para filtrar y mostrar todas las tareas
function filterAll() {
  let allTasks = document.querySelectorAll('.task-item');
  allTasks.forEach(task => {
    task.style.display = 'block'; // Muestra todas las tareas
  });
}

// Función para filtrar y mostrar solo las tareas activas (no completadas)
function filterActive() {
  let allTasks = document.querySelectorAll('.task-item');
  allTasks.forEach(task => {
    if (task.querySelector('.task-checkbox').checked) {
      task.style.display = 'none'; // Oculta las tareas completadas
    } else {
      task.style.display = 'block'; // Muestra las tareas no completadas
    }
  });
}

// Función para filtrar y mostrar solo las tareas completadas
function filterCompleted() {
  let allTasks = document.querySelectorAll('.task-item');
  allTasks.forEach(task => {
    if (!task.querySelector('.task-checkbox').checked) {
      task.style.display = 'none'; // Oculta las tareas no completadas
    } else {
      task.style.display = 'block'; // Muestra las tareas completadas
    }
  });
}

// Event listeners para los botones de filtrado
let btnAll = document.getElementById("btnAll");
let btnActive = document.getElementById("btnActive");
let btnCompleted = document.getElementById("btnCompleted");

btnAll.addEventListener("click", filterAll);
btnActive.addEventListener("click", filterActive);
btnCompleted.addEventListener("click", filterCompleted);



// Función para filtrar tareas incompletas
function filterUncompleted() {

}