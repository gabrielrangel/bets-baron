import {EventCard} from "./components/EventCard.js";
import {ProductCard} from "./components/ProductCard.js";

import './css/style.css'

function slipViewToggle () {
    const layer1 = document.querySelector('.layer1')
    const display = layer1.style.display === 'none'
    layer1.style.display = !display ? 'none' : 'flex'
}

function handleCheckout (e) {
    e.preventDefault()
}

function handleBetButtonClick (e) {
    const isButton = e.target.tagName === 'BUTTON'
    const button = isButton ? e.target : e.target.parentNode

    const isClicked = button.classList.contains('green')

    isClicked || Array.from(button.parentNode.children).forEach(button => button.classList.remove('green'))
    isClicked ? button.classList.remove('green') : button.classList.add('green')

    renderSlipView()
}

function renderSlipView () {
    const productList = document.querySelector('.product-list')

    Array.from(productList.children).forEach(card => {
        card.remove()
    })

    document.querySelectorAll('.selections-area .green')
        .forEach((button)=>{
            productList.appendChild(
                ProductCard({
                    ...button.parentNode.parentNode.dataset,
                    ...JSON.parse(button.value)
                })
            )
        })
}

window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        document.querySelector('header').classList.add('fixed')
        document.querySelector('main').classList.add('fixed')
    } else {
        document.querySelector('header').classList.remove('fixed')
        document.querySelector('main').classList.remove('fixed')
    }

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
