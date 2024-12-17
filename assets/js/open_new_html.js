const url = 'https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc'
const input = document.getElementById('input')
const title = document.querySelector('h1')
const submit = document.getElementById('submit')
const text = document.querySelector('.main__text')
const load = document.getElementById('loader')
const header = document.getElementById('header')


let params = new URLSearchParams(document.location.search)
let page = params.get('page')
let limit = params.get('limit')


const Open = (id, title) => {
    window.location.href = `search_attr.html?id=${id}&title=${title}`
}

// class Open {
//     constructor(id, title) {
//         this.id = id,
//             this.title = title
//     }

//     redirect() {
//         window.location.href = `search_attr.html?id=${id}&title=${title}`
//     }
// }

// input.addEventListener('keydown', () => {
//     const search = input.value
//     const newUrl = `all_attr.html?page=${page}&limit=${limit}title=${search}`
//     window.history.pushState({}, '', newUrl);
//     fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?title=${search}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ошибка запроса')
//             }
//             return response.json()
//         })
//         .then(response => {
//             load.style.display = 'none'
//             response.forEach(element => {
//                 cards.innerHTML = `
//                     <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
//                         <div class="main__subtitle" id="subtitle${element['id']}">
//                             <p>${element['title']}</p>
//                         </div>
//                         <div class="main__img main__img${element['id']}">
//                             <img src="${element['img3']}" alt="" id="img${element['id']}">
//                         </div>
//                     </div>
//                 `
//             })
//         })
// })

class Search {
    constructor(input) {
        this.input = input
        // this.search.addEventListener('keydown', this.funcSearch)
    }
    funcSearch() {
        const search = input.value
        console.log(search)
        const newUrl = `all_attr.html?page=${page}&limit=${limit}&title=${search}`
        window.history.pushState({}, '', newUrl);
        this.requestFetch(search)
    }
    requestFetch(title) {
        fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?title=${title}`)
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
        load.style.disaply = 'none'
        cards.innerHTML = ''
        response.forEach(element => {
            cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
            `
        })
    }
}

// input.addEventListener('focus', () => {
//     cards.innerHTML = ''
// })

class Focus {
    constructor(input, cards) {
        this.input = input,
        this.cards = cards
        // this.input.addEventListener('focus', this.notActive)
    }
    notActive(cards) {
        this.cards.innerHTML = ''
    }
}

const search = document.getElementById('input')
search.addEventListener('focus', () => {
    const foc = new Focus(input, cards)
    foc.notActive()
})

document.getElementById('input').addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' || 'Alt' || 'Shift' || 'CapsLock' || 'Tab') {
        console.log('не буква')
    }
    else {
        let input = search.value
        const render = new Search(cards);
        render.funcSearch()
    }
})

const filtration = (item) => {
    let params = new URLSearchParams(document.location.search)
    let page = params.get('page')
    let limit = params.get('limit')
    let filter = params.get('filter')
    console.log(filter)
    const newUrl = `all_attr.html?page=${page}&limit=${limit}&filter=${item}`;
    window.history.pushState({}, '', newUrl);
    fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?page=${page}&limit=${limit}&filter=${item}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then(response => {
            console.log(response)
            cards.innerHTML = ''
            response.forEach(element => {
                cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
                `
            })
        })
}

// class Filter {
//     constructor(item, filter) {
//         this.item = item,
//         this.filter = filter
//     }
//     funcUrl() {
//         const newUrl = `all_attr.html?page=${page}&limit=${limit}&filter=${item}`
//         window.history.pushState({}, '', newUrl);
//         this.filter()
//     }
//     filter(page, limit, filter) {
//         fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?page=${page}&limit=${limit}&filter=${filter}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Ошибка запроса')
//                 }
//                 return response.json()
//             })
//             .then(response => {
//                 this.render(response)
//             })
//     }
//     render(response) {
//         this.cards.innerHTML = ''
//         response.forEach(element => {
//             this.cards.innerHTML += `
//                 <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
//                     <div class="main__subtitle" id="subtitle${element['id']}">
//                         <p>${element['title']}</p>
//                     </div>
//                     <div class="main__img main__img${element['id']}">
//                         <img src="${element['img3']}" alt="" id="img${element['id']}">
//                     </div>
//                 </div>
//             `
//         })
//     }
// }


const sort = async () => {
    load.style.display = 'block';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка запрса')
            }
            return response.json()
        })
        .then(response => {
            load.style.display = 'none'
            response.sort((a, b) => b.rating - a.rating)
            cards.innerHTML = ''
            response.forEach(element => {
                cards.innerHTML += `
                        <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                            <div class="main__subtitle" id="subtitle${element['id']}">
                                <p>${element['title']}</p>
                            </div>
                            <div class="main__img main__img${element['id']}">
                                <img src="${element['img3']}" alt="" id="img${element['id']}">
                            </div>
                        </div>
                        `
            })
        })
}

// class Sort {
//     constructor(load, cards) {
//         this.load = load,
//             this.cards = cards
//     }
//     funcUrl() {
//         fetch('https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc/?page=1&limit=4')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Ошибка запроса')
//                 }
//                 return response.json()
//             })
//             .then(response => {
//                 render(response)
//             })
//     }
//     render(response) {
//         this.cards.innerHTML = ''
//         response.forEach(element => {
//             this.cards.innerHTML += `
//                 <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
//                     <div class="main__subtitle" id="subtitle${element['id']}">
//                         <p>${element['title']}</p>
//                     </div>
//                     <div class="main__img main__img${element['id']}">
//                         <img src="${element['img3']}" alt="" id="img${element['id']}">
//                     </div>
//                 </div>
//             `
//         })
//     }
// }
const filterHeader = () => {
    header.innerHTML = ''
    header.innerHTML += `
        <label for="natural">natural</label>
        <input type="radio" id="natural" class="radio" name="name" onclick="filtration('natural')">
        <label for="cultural">cultural</label>
        <input type="radio" id="cultural" class="radio" name="name" onclick="filtration('cultural')">
        <label for="historical">historical</label>
        <input type="radio" id="historical" class="radio" name="name" onclick="filtration('historical')">
    `
}
const sortHeader = () => {
    header.innerHTML = ''
    header.innerHTML += `
        <label for="Cathedral">Rating</label>
        <input type="radio" id="rating" class="radio" name="name" onclick="sort('rating')">
    `
}

// const pagination = () => {
//     document.getElementById('pagination').innerHTML = ''
//     header.innerHTML = ''
//     cards.innerHTML = ''
//     if (page >= 1) {
// fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc?page=${page}&limit=${limit}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка запроса')
//         }
//         return response.json()
//     })
//             .then(response => {
//                 load.style.display = 'none'
//                 const c = 16
//                 response.forEach(element => {
//                     cards.innerHTML += `
//                     <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
//                         <div class="main__subtitle" id="subtitle${element['id']}">
//                             <p>${element['title']}</p>
//                         </div>
//                         <div class="main__img main__img${element['id']}">
//                             <img src="${element['img3']}" alt="" id="img${element['id']}">
//                         </div>
//                     </div>
//                     `
//                 })
// let num = c / limit
// if (limit == 1) {
//     document.getElementById('pagination').style.margin = '3vh 1vw'
// }
// for (let y = 1; y < num+1; y++) {
//     document.getElementById('pagination').innerHTML += `
//         <p onclick="updatePag(${y})" id="pag${y}" class='main__pagination-num'>${y}</p>
//     `
// }
//             })
//         }
//     }

// document.addEventListener('DOMContentLoaded', () => {
//     pagination()
// })

const updatePag = (index) => {
    page = index
    window.location.href = `all_attr.html?page=${page}&limit=${limit}`
}

class Pagination {
    constructor(page, limit, pag, cards, load) {
        this.page = page,
            this.limit = limit,
            this.pag = pag,
            this.cards = cards,
            this.load = load
    }
    funcUrl() {
        if (page >= 1) {
            fetch(`https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc?page=${page}&limit=${limit}`)
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
    }
    render(response) {
        this.load.style.display = 'none'
        const c = 16
        response.forEach(element => {
            this.cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(${element['id']}, '${element['title']}')">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
            `
        })
        this.renderNum(c)
    }
    renderNum(c) {
        let num = c / limit
        if (limit == 1) {
            this.pag.style.margin = '3vh 1vw'
        }
        for (let y = 1; y < num + 1; y++) {
            this.pag.innerHTML += `
                <p onclick="updatePag(${y})" id="pag${y}" class='main__pagination-num'>${y}</p>
            `
        }
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.getElementById('cards');
    const pag = document.getElementById('pagination')
    const render = new Pagination(page, limit, pag, cards, load);
    render.funcUrl()
})

const reload = () => {
    location.reload()
}

// class UpdatePage {
//     constructor(id) {
//         this.id = id
//     }

//     selectPage() {
//         page = this.id
//     }
// }