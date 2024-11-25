const cards = document.getElementById('main')
const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'

const render = async () => {
    let response = await fetch(url)
    response = await response.json()
    response.forEach(element => {
        if (element['city'] == localStorage.getItem('id')) {
            let text = element['text'].split('.')[0]
            cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                    <div class="main__title">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__rows">
                        <div class="main__row">
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
                        <div class="main__row">
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
        }
    });
}

const Open = async (id) => {
    await fetch(url)
        .then(response => response.json())
        .then(response => DataRes = response[id])
    localStorage.setItem('data', JSON.stringify(DataRes))
    window.location.href = 'search_attr.html'
}

render()