const output = document.getElementById('output');
const todoListForm = document.getElementById('todoListForm');
const todoList = [];


const removeItem = (index) => {
    todoList.splice(index,1);
    displayTodoList(todoList);
}

const displayTodoList = (todoList) => {
    output.innerHTML  = '';
    todoList.forEach((value, index) => {
        const container = document.createElement('div');
        container.className = 'd-flex gap-3';

        const li = document.createElement('li');
        li.textContent = value;
        li.addEventListener('click', () => {
            li.classList.toggle('clicked');
        })

        const button = document.createElement('button');
        button.className = 'bi bi-trash'
        //button.textContent ='Trash';
        button.addEventListener('click', () => {
            removeItem(index);
        });

        container.appendChild(li);
        container.appendChild(button);
        output.appendChild(container);
    });
}



const AddItemToList = (value, todoList) => {
    todoList.push(value);
    displayTodoList(todoList);
}



export const submitItem = () => {
    todoListForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newItem = document.getElementById('newItem');
        AddItemToList(newItem.value, todoList);
        newItem.value ='';        
    })
}