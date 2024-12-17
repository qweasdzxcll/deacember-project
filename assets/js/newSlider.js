let value = 0;
const sliderLine= document.querySelector('.main__line');
const img = document.getElementById('img')
const slide = img.offsetWidth

const prevSlide =() => {
    value -= slide;
    if (value < 0) {
        value = slide*3;
    }
    sliderLine.style.left = -value + 'px'
}

const nextSlide =() => {
    value += slide;
    if (value > slide*3) {
        value = 0;
    }
    sliderLine.style.left = -value + 'px'
}

setInterval(nextSlide, 3000)
