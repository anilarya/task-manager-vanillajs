const TaskManager = (()=>{
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const getAllTasks = ()=>{
        return taskList
    }
    

    const deleteAllTasks = ()=>{
        localStorage.removeItem('tasks');
    }

    const addTask = (task)=>{
        let taskObj = {
            id: Date.now(), 
            task: task
        }
        taskList.push(taskObj); 
        console.log("taskObj", taskObj);
    }

    const removeTask = (id) =>{ 
        let tasks = taskList.filter((item)=> item.id !== id)
        localStorage.setItem('tasks', tasks);
    }

    const editTask = (id, newText)=>{ 
        let taskObj = taskList.find((item)=> item.id === id)
        taskObj.task = newText;
        localStorage.setItem('tasks', taskList);
    }

    return {getAllTasks, deleteAllTasks,  removeTask, addTask, editTask}

})();

export default TaskManager;