document.addEventListener("DOMContentLoaded", ()=>{
    const addButton= document.getElementById("add-task-btn");
    const taskInput= document.getElementById("task-input"); 
    const taskList=document.getElementById("task-list");
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
            removeButton.className="remove-Btn";
            removeButton.onclick=function(){
                taskList.removeChild(newTask);
            }
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            taskInput.value="";



        }

        
    }
    addButton.addEventListener("click",addtask);
    taskInput.addEventListener("keypress",()=>{
        if (Event.key=="Enter"){
            addtask();
            
        }

    });
   // addtask();

});