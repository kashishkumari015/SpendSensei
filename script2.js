// 🕒 Clock Function
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// ✅ To-Do List Functionality
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priority = document.getElementById("priority").value;
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerText = `${taskInput.value} [${priority.toUpperCase()}]`;
    li.style.color = priority === "high" ? "red" : priority === "medium" ? "orange" : "green";

    // Double-click to edit
    li.ondblclick = function () {
        let newText = prompt("Edit Task:", li.innerText);
        if (newText) li.innerText = newText;
    };

    // Remove Task on Click
    li.onclick = function () {
        taskList.removeChild(li);
    };

    taskList.appendChild(li);
    taskInput.value = "";
}

// 📅 Calendar Function
function generateCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
    const days = ["S", "M", "T", "W", "T", "F", "S"];

    days.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.innerText = day;
        dayDiv.classList.add("calendar-day");
        calendar.appendChild(dayDiv);
    });

    for (let i = 1; i <= 31; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.innerText = i;
        dateDiv.classList.add("calendar-day");
        calendar.appendChild(dateDiv);
    }
}

generateCalendar();
