const loadText = document.querySelector(".loading-text");
const backGrnd = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    
    
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    backGrnd.style.filter = `blur(${scale(load, 0, 100, 21, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// 'style.opacity counts from 1 to 0 or 0 to 1. Since' we want the int to count from 0 to 100 the const...
//... scale will convert 0 to 100, into 0 to 1


//img slider

const sliderContainer = document.querySelector('.slider-container');
const rightSlider = document.querySelector('.right-slider');
const leftSlider = document.querySelector('.left-slider');
const downButton = document.querySelector('.button-down');
const upButton = document.querySelector('.button-up');
const slidesLength = rightSlider.querySelectorAll('div').length;        //this will gice us the n.o of slides ie imgs using the divs

let activeSlideIndex = 0;

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if (direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }

    rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}