const listOfItems = document.querySelectorAll('.slider-list li');
const listOfMarkers = document.querySelectorAll('.marker');
const sliderSize = (listOfItems.length - 2) / 2;
listOfMarkers[0].classList.toggle('active');

const sliderList = document.querySelector('.slider-list');
const sliderList390px = document.querySelector('.mobile>.slider-list');

const rightArrow = document.querySelector('.right-arrow');
const leftArrow  = document.querySelector('.left-arrow');

let currentImage = 1;
leftArrow.classList.add('non-active');

let prevImage = listOfItems[currentImage - 1];
let nextImage = listOfItems[currentImage + 1];

function updatePrevNext() {
    prevImage = listOfItems[currentImage - 1];
    nextImage = listOfItems[currentImage + 1];
}

function changeMarkerColor(prevPos, nextPos) {
    listOfMarkers[prevPos].classList.toggle('active');
    listOfMarkers[nextPos].classList.toggle('active');
}

function toNextImage(sliderList, calcFunction) {
    const transformValue = calcFunction();
    sliderList.style.transform = transformValue;
    sliderList.style.transition = '500ms';
    changeMarkerColor(currentImage - 1, ++currentImage - 1);
}

function toPrevImage(sliderList, calcFunction) {
    const transformValue = calcFunction();
    sliderList.style.transform = transformValue;
    sliderList.style.transition = '500ms';
    changeMarkerColor(currentImage - 1, --currentImage - 1);
}

document.addEventListener('click', (event) => {
    if (event.composedPath().includes(nextImage) && currentImage < sliderSize) {
        toNextImage(sliderList, () => `translateX(${59.72 - 59.72 * currentImage}vw)`);
    } else if (event.composedPath().includes(prevImage) && currentImage > 1) {
        toPrevImage(sliderList, () => `translateX(${179.16 - 59.72 * currentImage}vw)`);
    }

    updatePrevNext();
});

rightArrow.addEventListener('click', () => {
    if (currentImage < sliderSize) {
        toNextImage(sliderList390px, () => `translateX(${-100 * currentImage}vw)`);
        leftArrow.classList.remove('non-active');
    }

    if (currentImage === sliderSize) {
        rightArrow.classList.add('non-active');
    }
});

leftArrow.addEventListener('click', () => {
    if(currentImage > 1) {
        toPrevImage(sliderList390px, () => `translateX(${-100 * currentImage + 200}vw)`);
        rightArrow.classList.remove('non-active');
    } 
    
    if (currentImage === 1) {
        leftArrow.classList.add('non-active');
    }
});