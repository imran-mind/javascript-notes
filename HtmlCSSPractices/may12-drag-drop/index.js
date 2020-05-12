const dragdivs = document.querySelectorAll('#drag-container div');

Array.from(dragdivs).forEach((dragdiv) => {
    dragdiv.addEventListener('dragstart', (event) => {
        console.log('dragstart',event.dataTransfer);
        event.target.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';

        const className = event.target.getAttribute('data-image');
        
        
        event.dataTransfer.setData('text/plain', className);
    });

    dragdiv.addEventListener('dragend', (event) => {
        console.log('dragend');
        const className = event.target.getAttribute('data-image');
        event.target.classList.remove('dragging');
        event.target.classList.remove(className)
    })
});
/* 
    // This events for draggable
    dragstart
    drag
    dragend
    */
const dropdivs = document.querySelectorAll('#drop-container div');
Array.from(dropdivs).forEach((dropdiv) => {
    dropdiv.addEventListener('dragenter', (event) => {
        console.log('---> dragenter <---', event.target);
        event.target.classList.add('drop-select');
        event.dataTransfer.dropEffect = 'move';

    });

    dropdiv.addEventListener('dragleave', (event) => {
        console.log('---> dragleave <---', event.target);
        event.target.classList.remove('drop-select');

    });

    dropdiv.addEventListener('dragover',(event)=>{
        event.preventDefault();
    })

    dropdiv.addEventListener('drop',(event)=>{
        const className = event.dataTransfer.getData('text/plain');
        console.log('drop')
        event.stopPropagation();
        event.target.classList.add(className);
        event.target.classList.remove('drop-select');
    })
})

/*
    // This events for droppable
    dragenter
    dragover
    dragleave
    drop
*/