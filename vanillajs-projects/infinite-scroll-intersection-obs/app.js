

const scroller = document.querySelector('#scroller');
const sentinel = document.querySelector('#sentinel');

let counter = 1;

function loadItems(n){
    for(let i=0; i<n; i++){
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.textContent = "Item "+counter++;
        scroller.appendChild(newItem);
    }
}


const intersectionObserver = new IntersectionObserver(entries =>{
    /** If the browser is busy while scrolling happens, multiple entries can accumlate
     * between invocations of the callback. As long as any one of the notifications
     *  reports the sentinel within the scrolling viewport, we add more content.
     */
    console.log(entries[0])
    if(entries.some(entry=> entry.intersectionRatio > 0)){
        console.log('inside if condition ',entries[0])
        loadItems(10);
        //appendChild will move the existing element, so there is no need
        //to remove it first
        scroller.appendChild(sentinel);
        loadItems(5);
    }
});

intersectionObserver.observe(sentinel);
