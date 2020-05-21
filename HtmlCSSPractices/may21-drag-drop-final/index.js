const listItems = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const todoList = document.getElementById('todo');
let dragItem = null;
const todos = ['item A', 'item B'];
console.log(todoList)
for (let i = 0; i < todos.length; i++) {
    // const item = listItems[i];
    // console.log(item);
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('list-item');
    todoDiv.innerHTML = todos[i];
    todoDiv.setAttribute('draggable', true);
    todoList.appendChild(todoDiv);

    todoDiv.addEventListener('dragstart', (event) => {
        dragItem = todoDiv;
        setTimeout(() => {
            event.target.style.display = 'none';
        }, 0)
    });

    todoDiv.addEventListener('dragend', () => {
        setTimeout(() => {
            dragItem.style.display = 'block';
        }, 0);
    })
    console.log('list => ',lists);

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];
        console.log('list ', list);
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        list.addEventListener('dragenter', (e) => {
            e.preventDefault();
            e.target.backgroundColor = 'rgba(0,0,0,0.2)';
        })

        list.addEventListener('dragleave', (e) => {
            e.target.backgroundColor = 'rgba(0,0,0,0.1)';
        })

        list.addEventListener('drop', (e) => {
            e.target.appendChild(dragItem);
            e.target.style.backgroundColor = 'rgba(0,0,0,0.1)';
        })
    }
}