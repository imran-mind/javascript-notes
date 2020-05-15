const dragDivs = document.querySelectorAll('.drag-section div');
// console.log(Array.from(dragDivs))
 // This events for draggable
 /*dragstart
 drag
 dragend
 */
Array.from(dragDivs).forEach(dragDiv=>{
    
    dragDiv.addEventListener('dragstart',(event)=>{
        event.target.classList.add('dragging');
        event.dataTransfer.effectAllowed = "move";
        const className = event.target.getAttribute('data-image');
        event.dataTransfer.setData('text/plain',className);
    });

    dragDiv.addEventListener('dragend',()=>{
        event.target.classList.remove('dragging');
    });

});

/*
    // This events for droppable
    dragenter
    dragover
    dragleave
    drop
*/

const dropdivs= document.querySelectorAll('.drop-section div');

console.log(Array.from(dropdivs))
Array.from(dropdivs).forEach((dropdiv)=>{
    dropdiv.addEventListener('dragenter',(event)=>{
        event.target.classList.add('dropping');
        console.log(event.target);
    });

    dropdiv.addEventListener('dragleave',(event)=>{
        event.target.classList.remove('dropping');
    })

    dropdiv.addEventListener('dragover',(event)=>{
        event.preventDefault();
    });

    dropdiv.addEventListener('drop',(event)=>{
        const className = event.dataTransfer.getData('text/plain');
        console.log('--> className dorp',className)
        event.stopPropagation();
        event.target.classList.remove('dropping');
        event.target.classList.add(className);
    })
})