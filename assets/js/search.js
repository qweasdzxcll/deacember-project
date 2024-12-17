const search = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const title = urlParams.get('title')
    const newUrl = `https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?title=${title}`
    fetch(newUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then(response => {
            const c = []
            c.push(response[0])
            document.getElementById("img1").src=c[0].img1;
            document.getElementById("img2").src=c[0].img2;
            document.getElementById("img3").src=c[0].img3;
            document.getElementById("img4").src=c[0].img4;
            document.getElementById('text').textContent = c[0].text;
            document.getElementById('title').textContent = c[0].title;
            document.getElementById('map').innerHTML += `<iframe src='${c[0].map}' width="822" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        })
        .catch(response => {
            document.getElementById('title').textContent = 'Element not found';
        })
}

const urlParams = new URLSearchParams(window.location.search)
const title = urlParams.get('title')
document.getElementById('reviews').innerHTML += `
    <h2 style="text-decoration: underline;"><a href="contacts.html?title=${title}">Оставить отзыв</a></h2>
`
if (title != null) {
    search()
}

const reviews = () => {
    fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/reviews/?title=${title}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then(response => {
            response.forEach(element => {
                document.getElementById('reviews').innerHTML += `
                    <div class="main__review" id="reviews">
                        <div class="main__rtitle">
                            <h2>${element['firstname'] + ' ' + element['lastname']}</h2>
                        </div>
                        <div class="main__comment">
                            <p>${element['comment']}</p>
                        </div>
                    </div>
                `
            })
        })
}

reviews()