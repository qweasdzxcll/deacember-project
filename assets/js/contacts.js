const form = document.querySelector('.contacts');
const btn = document.querySelector('.main__btn');
const submit = document.querySelector('.contacts__submit');
const img = document.querySelector('.main__img')
const main = document.querySelector('.main')

function conOpen() {
    form.style.display = 'flex';
    img.style.display = 'none';
}

function conClose() {
    form.style.display = 'none'
    img.style.display = 'flex'
    alert('Спасибо за комментарий')
}

btn.onclick = conOpen;
submit.onclick = conClose;

