const todos = [{
    id: 1,
    text: 'Reading book',
    status: 'OPEN'
}, {
    id: 2,
    text: 'Practice CSS',
    status: 'OPEN'
},{
    id: 3,
    text: 'Learn Deno',
    status: 'IN_PROGRESS'
}]
const OPEN = 'OPEN';
const PROGRESS = 'IN_PROGRESS';
const DONE = 'DOEN';
const input = document.querySelector('.input-box input');

const doneUL = document.querySelector('.done-items');

let taskId = 3;
input.addEventListener('keypress', (e) => {
    let inputVal = e.target.value;
    if (e.key === 'Enter') {
        const task = {
            id: taskId,
            text: inputVal,
            status: OPEN
        }
        taskId = taskId + 1;
        todos.push(task)
        console.log(inputVal)
        createOpenList(task);
        createInProgressList();
        createCompletedList();
        e.target.value = '';
    }
});

const openDivs = document.querySelector('.todo-items');

const createOpenList = (item) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('open-item');
    todoDiv.innerHTML = item.text;

    // dragging
    todoDiv.setAttribute('draggable', true);
    todoDiv.setAttribute('data-id', item.id);

    todoDiv.addEventListener('dragstart', () => {
        todoDiv.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', JSON.stringify(item));
    });

    todoDiv.addEventListener('dragend', (event) => {
        todoDiv.classList.remove('dragging');
        todoDiv.style.display = 'none';
        event.dataTransfer.dropEffect = 'move';
    });
    openDivs.appendChild(todoDiv);

    //dropping

}

const progressDivs = document.querySelector('.inprogress-items');

const createInProgressList = (todo) => {
    const inprogressDiv = document.createElement('div');
    inprogressDiv.classList.add('open-item');
    inprogressDiv.innerHTML = todo.text;

    console.log(inprogressDiv)

    progressDivs.appendChild(inprogressDiv);
    //dropping
    inprogressDiv.addEventListener('dragenter', (event) => {
        console.log('drag enter inprgoress', event.target);
        event.target.classList.add('drag-select');
        event.dataTransfer.dropEffect = 'move';
    });

    inprogressDiv.addEventListener('dragleave', (event) => {
        console.log('dragleave inprogress');
        event.target.classList.remove('drag-select');
    });

    inprogressDiv.addEventListener('dragover', () => {
        console.log('dragover inprogress');
        event.preventDefault();
    });

    inprogressDiv.addEventListener('drop', (event) => {
        event.target.classList.remove('drag-select');
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        const foundIndex = todos.findIndex((d) => d.id == data.id);

        const localList = todos;
        localList.splice(foundIndex, 1);

        data.status = PROGRESS;
        todos.push(data);

        event.target.innerHTML = data.text;
        event.target.classList.add('open-item');
        console.log('drop inprgoress', todos, data);
    });
    

    //dragging
    inprogressDiv.setAttribute('draggable', true);
    inprogressDiv.setAttribute('data-id', todo.id);

    inprogressDiv.addEventListener('dragstart',(event)=>{
        console.log('********dragstart********')
        event.dataTransfer.effectAllowed = 'move';
        console.log(' inprogress data transfer : ',event.dataTransfer.getData('text/plain'))
        event.dataTransfer.setData('text/plain', event.dataTransfer.getData('text/plain'));
    });

    inprogressDiv.addEventListener('dragend',(event)=>{
        event.dataTransfer.effectAllowed = 'move';
    });
}

const doneDivs = document.querySelector('.done-items');
const createCompletedList = () => {
    const doneDiv = document.createElement('div');

    doneDiv.addEventListener('dragenter', (event) => {
        console.log('drag enter doneDiv')
    });

    doneDiv.addEventListener('dragleave', (event) => {
        console.log('dragleave doneDiv');
    })

    doneDiv.addEventListener('dragover', () => {
        console.log('dragover doneDiv');
        event.preventDefault();
    });

    doneDiv.addEventListener('drop', () => {
        console.log('drop doneDiv');
    })
    doneDivs.appendChild(doneDiv);

}


const handleTodoList = () => {
    todos.forEach((todo) => {
        // createOpenList(todo);
        // createInProgressList(todo);
        // createCompletedList(todo);
        switch (todo.status) {
            case OPEN:
                createOpenList(todo);
                break;
            case PROGRESS:
                createInProgressList(todo);
                break;
            case DONE:
                createCompletedList(todo);
                break;
        }
    });
}


window.onload = handleTodoList();