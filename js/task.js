const TaskManager = (()=>{
  
    const getAllTasks =()=>{
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }
    const deleteAllTasks = ()=>{
        localStorage.removeItem('tasks');
    }

    const addTask = (task)=>{
        const taskList = getAllTasks()
        let taskObj = {
            id: String(Date.now()), 
            task: task
        } 
        taskList.push(taskObj);  
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    const removeTask = (id) =>{ 
        const taskList = getAllTasks()
        let tasks = taskList.filter((item)=> item.id !== id) 
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }

    const editTask = (id, newText)=>{ 
        const taskList = getAllTasks()
        let taskObj = taskList.find((item)=> item.id === id)
        taskObj.task = newText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return {getAllTasks,  deleteAllTasks,  removeTask, addTask, editTask}

})();

export default TaskManager;