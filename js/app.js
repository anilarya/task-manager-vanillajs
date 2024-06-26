//main function to Quick start
import Auth  from "./auth.js";
import TaskManager from "./task.js";
import RenderManager from "./render.js";

// (function(){

    //login form -authentication - localStorage.set , get and clear with logout

    // crud operation - read , write , delete , edit - taskmanager

    // Rendering of tasks 

    // css responsiveness 

    document.addEventListener('DOMContentLoaded', ()=>{
        const user = Auth.getUser(); 
        if(user){
            document.getElementById('loginSection').style.display = 'none'
            document.getElementById('taskSection').style.display = 'block'
            RenderManager.render(TaskManager.getAllTasks());
        }

        document.getElementById('logoutBtn').addEventListener('click', ()=>{
            document.getElementById('loginSection').style.display = 'block';
            document.getElementById('taskSection').style.display = 'none';
            Auth.logout();
        })

        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const username = document.getElementById('username').value;
            if (username) {
                Auth.login(username);
                document.getElementById('loginSection').style.display = 'none';
                document.getElementById('taskSection').style.display = 'block';
                RenderManager.render(TaskManager.getAllTasks());
            } else {
                console.error('Username is required');
            }
        });

        const taskform = document.getElementById('taskForm')
        taskform.addEventListener('submit', (e)=>{ 
            e.preventDefault();
            const task = document.getElementById('taskInput').value ; 
            TaskManager.addTask(task);
            RenderManager.render(TaskManager.getAllTasks());
            document.getElementById('taskForm').reset();
        }) 
    })
// })()