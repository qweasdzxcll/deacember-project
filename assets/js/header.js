const attrs = document.getElementById('attrs')
const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'

const renderHeader = async () => {
    let response = await fetch(url)
    response = await response.json()
        spis = []
    response.forEach(element => {
        spis.push(element['city'])
    });
    let sortSpis = [...new Set(spis)]
    sortSpis.forEach(element => {
        attrs.innerHTML += `
            <div class="header__item header__attr" id="${element}" onclick="localId(this.id)">
                <p>${element} Attractions</p>          
            </div>
            `
        })  
}
renderHeader()


