const attrs = document.getElementById('attrs')
const items = document.getElementById('items')
const fz = document.getElementById('elems')
const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'

const renderHeader = async () => {
    let response = await fetch(url)
        response = await response.json()
    let spis = []
    response.forEach(element => {
        spis.push(element['city'])
    });
    let sortSpis = [...new Set(spis)]
    sortSpis.forEach(element => {
        attrs.innerHTML += `
            <div class="header__item header__attr" id="${element}">
                <a href="attractions.html?city=${element}">${element} Attractions</a>          
            </div>
            `
        items.innerHTML += `
            <div class="header__burger-item" id="${element}">
                <a href="attractions.html?city=${element}">${element} Attractions</a>         
            </div>
            `
        }) 
    if (sortSpis.length == 5) {
        fz.style.fontSize = '25px'
    } else if (sortSpis.length == 6) {
        fz.style.fontSize = '22px'
    } else if (sortSpis.length == 7) {
        fz.style.fontSize = '20px'
    }
}

renderHeader()