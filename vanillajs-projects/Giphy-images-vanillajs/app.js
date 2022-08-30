

const imageList = document.getElementById('image-list');
const input = document.getElementById('search-images');
const imageCard = document.getElementById('1');
const loaderEl = document.querySelector('.loader');

let images = [];
// let pageOffset = 25;
let searchTerm = '';
 // control variables
 let currentPage = 1;
 const limit = 25;
 let total = 0;

const hasMoreImages = (page, limit, total) => {
    const startIndex = page * limit;//(page - 1) * limit + 1;
    return total === 0 || startIndex < total;
};

const showImages = (imgs) =>{
    for(let i=0; i<imgs.length; i++){
        const parentDiv = document.createElement('div');
        const info = imgs[i];
        
        parentDiv.classList.add('img-card');
        // parentDiv.setAttribute('data-id',info.id); 

        const img = document.createElement('img');
        img.setAttribute('data-id',info.id);    
        img.src = info?.images?.fixed_height?.webp;
        img.alt = info.id;

        parentDiv.appendChild(img);
        imageList.appendChild(parentDiv);
    }
}


const getImages = async (limit) =>{
    const apiUrl = `https://api.giphy.com/v1/gifs/search?offset=${limit}&type=${searchTerm}&sort=&q=images&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&pingback_id=182ed6ed1af168e4`;
    const response = await fetch(apiUrl);
    // handle 404
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
}

const hideLoader = () => {
    loaderEl.classList.remove('show');
};

const showLoader = () => {
    loaderEl.classList.add('show');
};

// load quotes
const loadImages= async (page, limit) => {
    // show the loader
    showLoader();
    try {
        console.log('outside hasMoreImages')
        // if having more quotes to fetch
        if (hasMoreImages(page, limit, total)) {
            console.log('inside hasMoreImages')
            // call the API to get quotes
            const response = await getImages(limit);
            images = [...images, ...response.data];
            // show quotes
            console.log('images = > ',images);
            showImages(response.data)
            // update the total
            total = response.pagination.total_count;
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        hideLoader();
    }

};


document.addEventListener('DOMContentLoaded', (event) => {
    loadImages(currentPage, limit); 
});

window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
    // console.log('scrollTop => ',scrollTop)
    // console.log('scrollHeight => ',scrollHeight)
    // console.log('clientHeight => ',clientHeight)
    if (scrollTop + clientHeight >= scrollHeight - 5 &&
        hasMoreImages(currentPage, limit, total)) {
            console.log('currentPage => ',currentPage);
            console.log('limit => ',limit);
            console.log('total => ',total);
        currentPage++;
        loadImages(currentPage, limit); 
    }
}, {
    passive: true
});



input.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        makeApiCall(limit);
        searchTerm = input.value;
        console.log(e.target.value);
    }
});

imageList.addEventListener('mouseover',function(e){
    
    if(e.target.getAttribute('data-id')){
        console.log('mouseover ',e.target.getAttribute('data-id'));
        const dataId = e.target.getAttribute('data-id');
        const foundObj = images.find(item=> item.id === dataId);
        console.log('foundObj -> ',foundObj , 'images ',images );
        if(foundObj){
            const imgDivOnHover  = document.createElement('div');
            imgDivOnHover.classList.add('img-on-hover-show');
    
            const img = document.createElement('img');
            img.src= foundObj?.images?.fixed_height?.webp; 
            img.classList.add('hover-img');
    
            const titleDiv = document.createElement('div');
            titleDiv.innerHTML = foundObj.title;
            titleDiv.classList.add('title');
    
            imgDivOnHover.appendChild(img);
            imgDivOnHover.appendChild(titleDiv);
    
            console.log(e.target.parentNode);
            e.target.parentNode.appendChild(imgDivOnHover)
        }
    }
});

imageList.addEventListener('mouseout',function(e){
    if(e.target.getAttribute('data-id')){
        console.log(e.target.parentNode.children);
        const childs = Array.from(e.target.parentNode.children);
        const filtered =  childs.filter((item)=>{
            if(Array.from(item.classList).includes('img-on-hover-show')){
                return item;
            }
        })
        console.log(filtered);
        if(e?.target?.parentNode && filtered.length){
            e.target.parentNode.removeChild(filtered[0]);
        }
    }
});
