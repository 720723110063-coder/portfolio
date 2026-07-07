function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)" style="cursor:pointer;">${task}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTask(task) {
    if (task.style.textDecoration === "line-through") {
        task.style.textDecoration = "none";
    } else {
        task.style.textDecoration = "line-through";
    }
}