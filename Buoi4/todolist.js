const button = document.getElementById("button");

let tasks = [];
// localStorage.clear();
render();

button.addEventListener("click", (e) => {
    e.preventDefault();
    let task = {
        taskName: document.getElementById("input").value,
        isDone: false
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
})

function render(){
    let todo = document.getElementById("todo");
    todo.innerHTML = null;
    let tasksFromLocal = JSON.parse(localStorage.getItem("tasks"));
    
    for (let i = 0;i < tasksFromLocal.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = tasksFromLocal[i].taskName;
        todo.appendChild(li);
    }
}