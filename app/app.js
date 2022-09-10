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