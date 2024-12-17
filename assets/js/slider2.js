let value = 0;
const sliderLine= document.querySelector('.main__line');
const img = document.querySelector('.main__img')
const slide = img.offsetWidth

const prevSlide =() => {
    value -= slide;
    if (value < 0) {
        value = slide;
    }
    sliderLine.style.left = -value + 'px'
}

const nextSlide =() => {
    value += slide;
    if (value > slide) {
        value = 0;
    }
    sliderLine.style.left = -value + 'px'
}

class Slider {
    constructor() {
        
    }
}


