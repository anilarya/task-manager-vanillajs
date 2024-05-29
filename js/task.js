const TaskManager = (()=>{
    let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
     
    const getAllTasks =()=>{
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
    const deleteAllTasks = ()=>{
        localStorage.removeItem('tasks');
    }

    const addTask = (task)=>{
        let taskObj = {
            id: String(Date.now()), 
            task: task
        }
        taskList.push(taskObj);  
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    const removeTask = (id) =>{ 
        let tasks = taskList.filter((item)=> item.id !== id) 
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(tasks, id)
    }

    const editTask = (id, newText)=>{ 
        let taskObj = taskList.find((item)=> item.id === id)
        taskObj.task = newText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return {taskList,getAllTasks,  deleteAllTasks,  removeTask, addTask, editTask}

})();

export default TaskManager;