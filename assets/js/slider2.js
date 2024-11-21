let offset = 0;
const sliderLine= document.querySelector('.main__line');
const img = document.querySelector('.main__img')
const slide = img.offsetWidth
const prevSlide =() => {
    offset -= slide;
    if (offset < 0) {
        offset = slide;
    }
    sliderLine.style.left = -offset + 'px'
}

const nextSlide =() => {
    offset += slide;
    if (offset > slide) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
}

document.querySelector('.btns__btn-next').onclick = prevSlide

document.querySelector('.btns__btn-prev').onclick = nextSlide

