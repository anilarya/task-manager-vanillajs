
import TaskManager from "./task.js";
const RenderManager = (()=>{
    const render = (tasks)=>{
        // get element by id and render

        let element = document.getElementById('taskList');
        element.innerHTML = '';
        tasks.forEach(item => {
            let uiEle = document.createElement('ui');
            uiEle.innerText = item.task;
            let liEle = document.createElement('li');
            let btnEle = document.createElement('button');
            btnEle.addEventListener('click', (e)=>{
                TaskManager.removeTask(item.id);
                render(TaskManager.getAllTasks())
            })
            liEle.appendChild(btnEle);
            element.appendChild(uiEle);
        }); 
    }

    return {render}
})()
export default RenderManager