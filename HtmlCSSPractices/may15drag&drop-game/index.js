
import random from 'lodash.random';
import shuffle from 'lodash.shuffle';

const words = ['APRIL','MAY','JUNE', 'JULY', 'JANUARY'];

const currentWord = words[random(0, words.length-1)];

const shuffleWord = shuffle(currentWord).join('');
console.log(currentWord, shuffleWord);

const dragContainer = document.querySelector('.drag-container');

const dropContainer = document.querySelector('.drop-container');
const notification = document.querySelector('.notification');

const getDropContainerValues = () =>{
    const dropdivs = dropContainer.querySelectorAll('div');
    const dropValues = [];
    Array.from(dropdivs).forEach((dropdiv)=>{
        dropValues.push(dropdiv.innerText.trim());
    });
    return dropValues.join('');
}
for(let i=0; i< shuffleWord.length; i++){
    // draggables
    const dragItem = document.createElement('div');
    dragItem.setAttribute('draggable', true);
    const currentChar = shuffleWord[i]; 
    dragItem.innerHTML = currentChar;
    dragContainer.appendChild(dragItem);

    // dragstart
    dragItem.addEventListener('dragstart',(event)=>{
        event.dataTransfer.effectAllowed = 'move';
        dragItem.classList.add('dragging');
        event.dataTransfer.setData('text/plain',currentChar);
    })

    // dragend
    dragItem.addEventListener('dragend',()=>{
        dragItem.classList.remove('dragging');
    })

    //droppables
    const dropItem = document.createElement('div');
    dropContainer.appendChild(dropItem);

    // dragenter
    dropItem.addEventListener('dragenter',()=>{
        dropItem.classList.add('drag-select');
        event.dataTransfer.dropEffect= 'move';
    });
    
    // dragleave
    dropItem.addEventListener('dragleave',()=>{
        dropItem.classList.remove('drag-select');
    });

    //dragover
    dropItem.addEventListener('dragover',(event)=>{
        event.preventDefault();
    })

    dropItem.addEventListener('drop',(event)=>{
        dropItem.classList.remove('drag-select');
        const value = event.dataTransfer.getData('text/plain');
        dropItem.innerHTML = value; 

        if(getDropContainerValues() === currentWord){
            notification.style.display = 'flex';
            // notification.innerHTML = currentWordx+ ' Badhai ho App jeet Gaye :)'

            setTimeout(()=>{
                notification.style.display = 'none';
            },3000)
        }
    })
}
console.log(dragContainer)