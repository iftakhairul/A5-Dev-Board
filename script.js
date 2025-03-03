document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const day = today.toLocaleDateString('en-US', { weekday: 'short' });
    const year = today.toLocaleDateString('en-US', { year: 'numeric' });
    const month = today.toLocaleDateString('en-US', { month: 'short' });
    const date = today.toLocaleDateString('en-US', { day: 'numeric' });
    document.getElementById('date').innerText = `${day} ${month} ${date} ${year}`;
});

document.addEventListener("DOMContentLoaded", function () {
    const taskCount = document.getElementById("assigned-task");
    const countcompeted = document.getElementById("task-completed");
    const listofhistory = document.getElementById("listofhistory");
    const clear = document.getElementById("clearHistory");
    let totalTasks = document.querySelectorAll(".grid").length;
    let completedTasks = 20;
    
    taskCount.textContent = totalTasks;
    
    document.querySelectorAll(".complete-btn").forEach(button => {
        button.addEventListener("click", function () {
            if (confirm("Are you sure you want to mark this task as complete?")) {
                this.disabled = true;
                completedTasks++;
                totalTasks--;
                taskCount.textContent = totalTasks;
                countcompeted.textContent = completedTasks;
                
                let Title = document.getElementById(this.dataset.task).textContent;
                let history = document.createElement("p");
                let time = new Date().toLocaleString();
                history.textContent = 'You have completed the task ' + Title + ' at ' + time;
                listofhistory.appendChild(history);
                
                if (totalTasks === 0) {
                    alert("All tasks are done!");
                }
            }
        });
    });
    
    clear.addEventListener("click", function () {
        listofhistory.innerHTML = "";
    });
});