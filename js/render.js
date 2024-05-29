
import TaskManager from "./task.js";
const RenderManager = (()=>{
    const render = (tasks=[])=>{
        // get element by id and render

        let element = document.getElementById('taskList');
        element.innerHTML = '';  
        tasks.forEach(item => {
            let ulEle = document.createElement('ul');
            ulEle.innerText = item.task;
            let liEle = document.createElement('li');
            let btnEle = document.createElement('button');
            btnEle.innerText = "X";
            btnEle.style.cursor = 'pointer';
            btnEle.setAttribute("id", item.id);
            btnEle.addEventListener('click', (e)=>{ 
                const buttonId = e.target.id;
                TaskManager.removeTask(buttonId);
                render(TaskManager.getAllTasks())
            })
            liEle.appendChild(btnEle);
            ulEle.appendChild(liEle);
            element.appendChild(ulEle);
        }); 
    }

    return {render}
})()
export default RenderManager