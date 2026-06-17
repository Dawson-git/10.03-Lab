// Task 1
function domLoaded() {
    document.querySelector("#add-btn").addEventListener("click", addBtnClick);

    document.querySelector("#new-task").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    // Wire up removeTask for the initial tasks already in the HTML
    let doneBtns = document.querySelectorAll(".done-btn");
    doneBtns.forEach(function (btn) {
        btn.addEventListener("click", removeTask);
    });
}

// Task 2 / Task 3 / Task 4
function addBtnClick() {
    let textbox = document.querySelector("#new-task");
    let newTask = textbox.value;

    if (newTask !== "") {
        addTask(newTask);
        textbox.value = "";
        textbox.focus();
    }
}

// Task 2 / Task 5
function addTask(newTask) {
    let li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

    let ol = document.querySelector("ol");
    ol.appendChild(li);

    let doneBtns = document.querySelectorAll(".done-btn");
    doneBtns[doneBtns.length - 1].addEventListener("click", removeTask);
}

// Task 5
function removeTask(event) {
    let li = event.target.parentNode;
    let ol = li.parentNode;
    ol.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);