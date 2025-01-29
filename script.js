document.addEventListener("DOMContentLoaded", ()=>{
    const addButton= document.getElementById("add-task-btn");
    const taskInput= document.getElementById("task-input"); 
    const taskList=document.getElementById("task-list");
    //function of controling the adding of tasks
    function addtask() {
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
            removeButton.className="remove-btn";
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
    addButton.addEventListener("click",addtask);
    taskInput.addEventListener("keypress",()=>{
        if (Event.key=="Enter"){
            addtask();
            
        }

    });
  

});