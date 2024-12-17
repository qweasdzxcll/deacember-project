const form = document.getElementById('form')
const reviews = document.getElementById('reviews')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const dataForm = new FormData(form)
    const data = Object.fromEntries(dataForm.entries())

    fetch('https://672c8d021600dda5a9f8e610.mockapi.io/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Ошибка запроса')
        }
        const data = response.json
    })
    .then(response => {
        let search = document.getElementById('title').value
        window.location.href = `search_attr.html?title=${search}`
    })
})

const params = new URLSearchParams(window.location.search)
let page = params.get('page')
let limit = params.get('limit')


const formRender = () => {
    let params = new URLSearchParams(window.location.search)
    let title = params.get('title')
    if (title != null || title != undefined) {
        form.innerHTML += `
            <label for="title">Name of attraction: </label>
            <input type="text" name="title" id="title" value="${title}">
            <label for="firstname">Firstname: </label>
            <input type="text" name="firstname" id="firstname" required>
            <label for="Lastname">Lastname: </label>
            <input type="text" name="lastname" id="lastname" required>
            <label for="email">Mail: </label>
            <input type="email" name="email" id="email">
            <label for="comment">Comment: </label>
            <textarea name="comment" id="comment" required></textarea>
            <input type="submit" value="Отправить.." id="submit" style="cursor: pointer;">
        `
    } else {
        form.innerHTML += `
        <label for="title">Name of attraction: </label>
        <input type="text" name="title" id="title">
        <label for="firstname">Firstname: </label>
        <input type="text" name="firstname" id="firstname" required>
        <label for="Lastname">Lastname: </label>
        <input type="text" name="lastname" id="lastname" required>
        <label for="email">Mail: </label>
        <input type="email" name="email" id="email">
        <label for="comment">Comment: </label>
        <textarea name="comment" id="comment" required></textarea>
        <input type="submit" value="Отправить.." id="submit" style="cursor: pointer;">
        `
    }
}
formRender()