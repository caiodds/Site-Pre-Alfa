const ancora = document.querySelectorAll('a')
const app = document.getElementById('app')

function teste(btn) {
    document.getElementById('carregar').innerHTML = "Baixando aguarde"
    setTimeout(() => {
        document.getElementById('carregar').innerHTML = "BAixado com sucesso!!"
    }, 1000);
}

ancora.forEach(a => {
    a.addEventListener('click', (evt) => {
        evt.preventDefault()
        const pagina = evt.target.getAttribute('data-target')
        fetch(pagina)
            .then(resp => resp.text())
            .then(resp => app.innerHTML = resp)
    })

})