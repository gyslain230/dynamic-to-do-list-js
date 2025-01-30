document.addEventListener("DOMContentLoaded", ()=>{
    const addButton= document.getElementById("add-task-btn");
    const taskInput= document.getElementById("task-input"); 
    const taskList=document.getElementById("task-list");
    //function of controling the adding of tasks
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    function addTask() {
        const taskText=taskInput.value.trim();
        if (taskText.value=="") {
            alert(" prompt the user to enter a task."); 
            
        }
        else{
            const newTask= document.createElement("li");
            newTask.textContent = taskText;
            const removeButton= document.createElement("button");
            removeButton.textContent="Remove";
            //classname to remove button
            removeButton.classList.add("remove-btn");
            //removing the new task wen the remove button is clicked
            removeButton.onclick=function(){
                taskList.removeChild(newTask);
            }
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            taskInput.value="";



        }

        
    }
    // adding functionalities to the add button so as to respond to when enter button is clicked and on click
    addButton.addEventListener("click",addTask);
    taskInput.addEventListener("keypress",()=>{
        if (event.key =="Enter"){
            addTask();
            
        }

    });
  

});