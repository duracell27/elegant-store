const closeTaglineButton = document.querySelector('#closeTagline')
closeTaglineButton.addEventListener('click', () => {
    document.querySelector('.tagline').remove()
})