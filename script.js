document.addEventListener("DOMContentLoaded", ()=>{
    const addButton= document.getElementById("add-task-btn");
    const taskInput= document.getElementById("task-input"); 
    const taskList=document.getElementById("task-list");
    
    //function of controling the adding of tasks
      loadTasks();
    function loadTasks() {
         const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask); // 'false' indicates not to save again to Local Storage
      
    }
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            tasks.push(task.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    /////////////////////////////
    function addTask() {
        const taskText=taskInput.value.trim();
        if (taskText.value=="") {
            alert(' prompt the user to enter a task.'); 
            
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
                saveTasks();
                
                
            }
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            taskInput.value="";
            saveTasks();
            



        }
       
       
        
    }
     //saving the task list on the local storage system
    

    // adding functionalities to the add button so as to respond to when enter button is clicked and on click
    addButton.addEventListener("click",addTask);
    taskInput.addEventListener("keypress",()=>{
        if (event.key =="Enter"){
            addTask();
            
        }

    });
  

  

});