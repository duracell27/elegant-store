const endDate = new Date('Mar 18, 2024, 23:59:59');

const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')

function updatetimer() {
    const now = new Date()

    const timeDifference = endDate-now

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    daysElement.innerHTML = days <10 ? '0' + days : days
    hoursElement.innerHTML = hours <10 ? '0' + hours : hours
    minutesElement.innerHTML = minutes <10 ? '0' + minutes : minutes
    secondsElement.innerHTML = seconds <10 ? '0' +seconds : seconds
}
updatetimer()
setInterval(updatetimer, 1000)