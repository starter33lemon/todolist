const todoInput = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const todolist = document.getElementById('todo-list');

addbtn.addEventListener('click', addTask);


function addTask(){
    const taskText = todoInput.value.trim();

    if(taskText === ''){
       alert('PLEASE ENTER YOUR TASK!');
        return;
    }

    const li = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.innerText = taskText;

    textSpan.addEventListener('click', () =>
        { 
            li.classList.toggle('completed');
        });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () =>
        {
            li.remove();
        });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    todolist.appendChild(li);

    todoInput.value = '';}

todoInput.addEventListener('keypress', (e) => 
    {
        if(e.key === 'Enter')
            {
                addTask();
            }
    });
