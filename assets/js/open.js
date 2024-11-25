const localId = (id) => {
    localStorage.setItem('id', id)
    window.location.href = 'attractions.html'
}
