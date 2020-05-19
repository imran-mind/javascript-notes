const todos = [{
    id: 1,
    text: 'Reading book',
    status: 'OPEN'
}, {
    id: 2,
    text: 'Practice CSS',
    status: 'OPEN'
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
    
    todoDiv.setAttribute('draggable', true);
    todoDiv.setAttribute('data-id',item.id);

    todoDiv.addEventListener('dragstart', () => {
        todoDiv.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain',JSON.stringify(item));
    });

    todoDiv.addEventListener('dragend', (event) => {
        todoDiv.classList.remove('dragging');
        todoDiv.style.display = 'none';
        event.dataTransfer.dropEffect= 'move';
    });
    openDivs.appendChild(todoDiv);

    // const li = document.createElement('li');
    // const editBtn = document.createElement('button');

    // const divBtns = document.createElement('div');
    // editBtn.innerHTML = "Edit";
    // const delBtn = document.createElement('button');
    // delBtn.innerHTML = "Del";
    // divBtns.appendChild(editBtn);
    // divBtns.appendChild(delBtn);

    // li.innerHTML = item.text;
    // li.appendChild(divBtns);
    // li.classList.add('todo-li');

    // li.setAttribute('draggable', true);
    // li.addEventListener('dragstart', () => {
    //     li.classList.add('dragging');
    // });

    // li.addEventListener('dragend', () => {
    //     li.classList.remove('dragging');
    // });
    // openUL.appendChild(li);
}

const progressDivs = document.querySelector('.inprogress-items');

const createInProgressList = () => {
    const inprogressDiv = document.createElement('div');

    inprogressDiv.addEventListener('dragenter',(event)=>{
        console.log('drag enter inprgoress',event.target);
        event.target.classList.add('drag-select');
        event.dataTransfer.dropEffect= 'move';
    });

    inprogressDiv.addEventListener('dragleave',(event)=>{
        console.log('dragleave inprogress');
        event.target.classList.remove('drag-select');
    });

    inprogressDiv.addEventListener('dragover',()=>{
        console.log('dragover inprogress');
        event.preventDefault();
    });

    inprogressDiv.addEventListener('drop',(event)=>{
        event.target.classList.remove('drag-select');
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        const foundIndex = todos.findIndex((d)=> d.id ==data.id);
        
        const localList = todos;
        localList.splice(foundIndex,1);
        
        data.status = PROGRESS;
        todos.push(data);
        
        event.target.innerHTML = data.text;
        event.target.classList.add('open-item');
        console.log('drop inprgoress',todos,data);
    });
    progressDivs.appendChild(inprogressDiv);
    // const progressLI = document.createElement('li');
    // progressUL.appendChild(progressLI);
    // progressLI.addEventListener('dragenter', (event) => {
    //     console.log('drag enter todo')
    // });
}

const doneDivs = document.querySelector('.done-items');
const createCompletedList = () => {
    const doneDiv = document.createElement('div');

    doneDiv.addEventListener('dragenter',(event)=>{
        console.log('drag enter doneDiv')
    });

    doneDiv.addEventListener('dragleave',(event)=>{
        console.log('dragleave doneDiv');
    })

    doneDiv.addEventListener('dragover',()=>{
        console.log('dragover doneDiv');
        event.preventDefault();
    });

    doneDiv.addEventListener('drop',()=>{
        console.log('drop doneDiv');
    })
    doneDivs.appendChild(doneDiv);

}


const handleTodoList = () => {
    todos.forEach((todo) => {
        // createOpenList(todo);
        // createInProgressList(todo);
        // createCompletedList(todo);
        // switch (todo.status) {

        //     case OPEN:
        //         createOpenList(todo);
        //         break;
        //     case PROGRESS:
        //         createInProgressList(todo);
        //         break;
        //     case DONE:
        //         createCompletedList(todo);
        //         break;
        // }
    });
}


window.onload = handleTodoList();