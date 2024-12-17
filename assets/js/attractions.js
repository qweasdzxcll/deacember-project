const cards = document.getElementById('main')
const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'
const modal = document.getElementById('modal')

class Attractions {
    constructor(cards) {
        this.cards = cards
    }
    funcUrl() {
        modal.innerHTML = ''
        const urlParams = new URLSearchParams(window.location.search).get('city')
        const newUrl = `https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?city=${urlParams}`
        document.getElementById('back').href=`${urlParams.toLowerCase()}.html`
        fetch(newUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка запроса')
                }
                return response.json()
            })
            .then(response => {
                this.render(response)
            })
    }
    render(response) {
        response.forEach(element => {
            const text = element['text'].split('.')[0]
            cards.innerHTML +=  `
                <div class="main__card" id="${element['id']}" onclick="gallery(${element['id']})">
                    <div class="main__title">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__rows">
                        <div class="main__row main__row1">
                            <div class="main__img main__img-gor">
                                <img src="${element['img1']}" alt="img">
                            </div>
                            <div class="main__img main__img-vert">
                                <img src="${element['img2']}" alt="img">
                            </div>
                        </div>
                        <div class="main__text">
                            <p>${text}</p>
                        </div>
                        <div class="main__row main__row2">
                            <div class="main__img main__img-vert">
                                <img src="${element['img4']}" alt="img">
                            </div>
                            <div class="main__img main__img-gor">
                                <img src="${element['img3']}" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
        `
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.getElementById('cards');
    const render = new Attractions(cards);
    render.funcUrl()
})

let count = 0
let spis = []
const gallery = (id) => {
    fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?id=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then(response => {
            cards.innerHTML = ''
            document.body.style.backgroundColor = 'grey'
            spis.push(response[0]['img1'])
            spis.push(response[0]['img2'])
            spis.push(response[0]['img3'])
            spis.push(response[0]['img4'])
            modal.innerHTML = `
                    <div class="main__modal-arr">
                        <h2 class="close" onclick="clos()">X</h2>
                        <img src="./assets/img/Next page.png" id='prev' onclick = 'prev()' class='btn'>
                    </div>
                    <div class="main__modal-img">
                        <img src="${spis[count]}" style="outline: 7px solid grey; outline-offset: -7px;">
                    </div>
                    <div class="main__modal-arr">
                        <img src="./assets/img/Next page (1).png" id='next' onclick = 'next()' class='btn'>
                    </div>
                `
        })
}

const clos = () => {
    location.reload()
}

const prev = () => {
    if (count > 0) {
        count--
        modal.innerHTML = `
            <div class="main__modal-arr">
                <h2 class="close" onclick="clos()">X</h2>
                <img src="./assets/img/Next page.png" id='prev' onclick = 'prev()'>
            </div>
            <div class="main__modal-img">
                <img src="${spis[count]}" style="outline: 7px solid grey; outline-offset: -7px;">
            </div>
            <div class="main__modal-arr">
                <img src="./assets/img/Next page (1).png" id='next' onclick = 'next()'>
            </div>
        `
    }
}

const next = () => {
    if (count < spis.length-1) {
        count++
        modal.innerHTML = `
            <div class="main__modal-arr">
                <h2 class="close" onclick="clos()">X</h2>
                <img src="./assets/img/Next page.png" id='prev' onclick = 'prev()'>
            </div>
            <div class="main__modal-img">
                <img src="${spis[count]}" style="outline: 7px solid grey; outline-offset: -7px;">
            </div>
            <div class="main__modal-arr">
                <img src="./assets/img/Next page (1).png" id='next' onclick = 'next()'>
            </div>
        `
    }
}