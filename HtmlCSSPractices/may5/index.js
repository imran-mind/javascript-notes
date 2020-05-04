
// const _ = require('lodash');
/* 
Creating Image Div with image tag
 */
const createMealImage = (mealBox) =>{
    const mealImgDiv = document.createElement('div');
    const img = document.createElement('img');
    mealImgDiv.classList.add('meal-img');
    img.src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wiv385eix5pfmvd1umfv";
    img.alt = "No Image Found";
    mealImgDiv.appendChild(img);
    mealBox.appendChild(mealImgDiv);
}

const createMealText = (mealBox) =>{
    const mealTitleDiv = document.createElement('div');
    mealTitleDiv.classList.add('meal-title');
    mealTitleDiv.innerHTML = "Onesta";
    mealBox.appendChild(mealTitleDiv);
}
const createMealTitle = (mealBox) =>{
    const mealTitleDiv = document.createElement('div');
    mealTitleDiv.classList.add('meal-types');
    mealTitleDiv.innerHTML = "Italian, Deseret, Pizzas";
    mealBox.appendChild(mealTitleDiv);
}

/* Creating Meal text spans and appending to its parent div*/
const createRateSpan = (mealRatingeDiv) =>{
    const rateSpan1 = document.createElement('span');
    rateSpan1.innerHTML = '*';
    mealRatingeDiv.appendChild(rateSpan1);
    
    const rateSpan2 = document.createElement('span');
    rateSpan2.innerHTML = '4.6';
    mealRatingeDiv.appendChild(rateSpan2);
}

/* Creating Meal text div */
const createRatingDiv = (mealInfoDiv)=>{
    const mealRatingeDiv = document.createElement('div');
    mealRatingeDiv.classList.add('rating');
    createRateSpan(mealRatingeDiv);
    mealInfoDiv.appendChild(mealRatingeDiv);
}
const createDivForMealStatus = (mealInfoDiv) =>{
    const mealDotDiv = document.createElement('div');
    mealDotDiv.innerHTML = ".";
    mealInfoDiv.appendChild(mealDotDiv);

    const mealMinutesDiv = document.createElement('div');
    mealMinutesDiv.innerHTML = "35 MINS";
    mealInfoDiv.appendChild(mealMinutesDiv);

    const mealDot2Div = document.createElement('div');
    mealDot2Div.innerHTML = ".";
    mealInfoDiv.appendChild(mealDot2Div);
}

const createDiscountDiv = (mealInfoDiv) =>{
    const mealDiscDiv = document.createElement('div');
    mealDiscDiv.classList.add('meal-discount');
    const disSpan = document.createElement('span');
    disSpan.innerHTML = "Free Budweiser Non-Alcoholic drink-330ml Tin on orders above ₹250";
    mealDiscDiv.appendChild(disSpan);
    mealInfoDiv.appendChild(mealDiscDiv);
}

const createMealInfo = (mealBox) =>{
    const mealInfoDiv = document.createElement('div');
    mealInfoDiv.classList.add('meal-info');
    createRatingDiv(mealInfoDiv);
    createDivForMealStatus(mealInfoDiv);
    console.log(mealInfoDiv)
    mealBox.appendChild(mealInfoDiv);
}


const createQuickViewDiv = (mealBox) =>{
    const mealQuickViewDiv = document.createElement('div');
    mealQuickViewDiv.classList.add('quick-view');
    mealQuickViewDiv.innerHTML = "Quick View"
    mealBox.appendChild(mealQuickViewDiv);
}
/* 
    Creating Main Meal Container
*/
const createMealContainer = () =>{
    const wrapper = document.querySelector('.wrapper');
    const mealBox = document.createElement('div');
    mealBox.classList.add('meal-box');
    createMealImage(mealBox);
    createMealText(mealBox);
    createMealTitle(mealBox);
    createMealInfo(mealBox);
    createDiscountDiv(mealBox);
    createQuickViewDiv(mealBox);
    wrapper.appendChild(mealBox);
}

createMealContainer();
createMealContainer();
createMealContainer();
createMealContainer();
