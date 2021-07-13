//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//functions
function addTodo(event) {
    //prevent form from reload
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creat li
    const newTodo = document.createElement("li");
    if (todoInput.value.trim().length != 0) {


        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //check button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class = "fas fa-check"></i>';
        completeButton.classList.add("complete-btn");
        todoDiv.appendChild(completeButton);
        //trans btn
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class = "fas fa-trash-alt"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append
        todoList.appendChild(todoDiv)
            //clear todo input
        todoInput.value = "";
    }
}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function required() {
    var empt = document.forms["form1"]["Name"].value;
    if (empt == "") {
        alert("Please input a Value");
        return false;
    }
}