
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

});
taskList.appendChild(li);
taskList.addEventListener("click", function(event) {

    if (event.target.classList.contains("edit-btn")) {

        const li = event.target.closest("li");
        const span = li.querySelector("span");

        const updatedTask = prompt(
            "Edit your task:", span.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {
            span.textContent = updatedTask.trim();
        }
    }

});

if (event.target.classList.contains("delete-btn")) {

    const li = event.target.closest("li");

    li.remove();

}
if (event.target.tagName === "SPAN") {
    event.target.classList.toggle("completed");
}