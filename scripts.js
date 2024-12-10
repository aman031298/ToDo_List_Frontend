// Dynamically retrieve the API URL from a meta tag
const API_URL = document.querySelector('meta[name="api-url"]').getAttribute('content');

let editTaskId = null;

// Function to handle task creation
document.getElementById("taskForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const description = document.getElementById("taskDescription").value;
    if (!description) return;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, completed: false }),
    });

    if (response.ok) {
        fetchTasks(); // Re-fetch tasks to update numbering
        document.getElementById("taskForm").reset();
    } else {
        alert("Failed to add task.");
    }
});

// Function to fetch all tasks
async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTasks(tasks);
}

// Function to render all tasks with numbering
function renderTasks(tasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the task list
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
        taskItem.innerHTML = `
            <span>${index + 1}. ${task.description}</span>
            <div>
                <button class="btn btn-warning btn-sm me-2" onclick="openEditModal(${task.id}, '${task.description}', ${task.completed})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to delete a task
async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (response.ok) {
        fetchTasks(); // Re-fetch tasks to update numbering
    } else {
        alert("Failed to delete task.");
    }
}

// Function to open the edit task modal
function openEditModal(id, description, completed) {
    editTaskId = id;
    document.getElementById("editTaskDescription").value = description;
    document.getElementById("editTaskCompleted").checked = completed;
    document.getElementById("editTaskModal").style.display = "block";
}

// Function to close the edit task modal
function closeEditModal() {
    document.getElementById("editTaskModal").style.display = "none";
}

// Function to handle task updates
document.getElementById("editTaskForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const description = document.getElementById("editTaskDescription").value;
    const completed = document.getElementById("editTaskCompleted").checked;

    if (!description) return;

    const response = await fetch(`${API_URL}/${editTaskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, completed }),
    });

    if (response.ok) {
        fetchTasks(); // Re-fetch tasks to update numbering
        closeEditModal();
    } else {
        alert("Failed to update task.");
    }
});

// Initial fetch of tasks
fetchTasks();
