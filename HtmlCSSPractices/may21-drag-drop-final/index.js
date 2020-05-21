const listItems = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const todoList = document.getElementById('todo');
let dragItem = null;
const todos = ['item A', 'item B'];
console.log(todoList)

const input = document.querySelector('.input-box input');

input.addEventListener('keypress', (e) => {
    let inputVal = e.target.value;
    if (e.key === 'Enter') {
        todos.push(inputVal)
        console.log(inputVal)
        createOpenList(inputVal);
        e.target.value = '';
    }
});
const createOpenList = (task) =>{
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('list-item');
    todoDiv.innerHTML = task;
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
    console.log('list => ', lists);
}


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
    });
}
// }