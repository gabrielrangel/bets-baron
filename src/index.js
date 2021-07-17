import {EventCard} from "./components/EventCard.js";

function slipViewToggle () {
    const layer1 = document.querySelector('.layer1')
    const display = layer1.style.display === 'none'
    layer1.style.display = !display ? 'none' : 'block'
}

function handleCheckout (e) {
    console.log('checkout')
    e.preventDefault()
}

function handleBetButtonClick (e) {
    const isButton = e.target.tagName === 'BUTTON'
    const button = isButton ? e.target : e.target.parentNode

    const isClicked = button.classList.contains('green')
    isClicked ? button.classList.remove('green') : button.classList.add('green')
}

document.querySelectorAll('.slip-view-toggle').forEach(toggle => {
    toggle.addEventListener('click', slipViewToggle)
})

document.querySelector('#checkout').addEventListener('submit', handleCheckout)

fetch('https://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then((res) => res.json())
    .then((data) => {
        const main = document.querySelector('main')

        data.forEach((event) => {
            event.markets.length > 0 && main.appendChild(EventCard(event))
        })

        document.querySelectorAll('.event-card button').forEach(betButton => {
            betButton.addEventListener('click', handleBetButtonClick)
        })
    })
