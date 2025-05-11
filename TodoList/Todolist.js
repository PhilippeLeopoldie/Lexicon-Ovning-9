const output = document.getElementById('output');
const todoListForm = document.getElementById('todoListForm');
const storedList = sessionStorage.getItem('todoList');
const todoList = storedList ? JSON.parse(storedList) : [];


const saveTodoList = () => {
    sessionStorage.setItem('todoList', JSON.stringify(todoList));
};

const removeItem = (index) => {
    todoList.splice(index,1);
    displayTodoList(todoList);
}

const displayTodoList = (todoList) => {
    output.innerHTML  = '';
    todoList.forEach((item, index) => {
        const container = document.createElement('div');
        container.className = 'd-flex gap-3';

        const li = document.createElement('li');
        li.textContent = item.text;
        if(item.done) li.classList.add('clicked');
        li.addEventListener('click', () => {
            item.done = !item.done;
            displayTodoList(todoList);
            //li.classList.toggle('clicked');
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
    saveTodoList();
}



const AddItemToList = (value, todoList) => {
    todoList.push({text:value, done: false});
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