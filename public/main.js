/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Market.js
function Market ({game, name, selections}){
    const market = document.createElement('div')
    market.classList.add('market')
    market.dataset.game = game
    market.dataset.market = name

    market.appendChild( Object.assign(
        document.createElement('p'),
        {
            innerHTML: name
        }
    ))

    const selectionsArea = market.appendChild( Object.assign(
        document.createElement('div'),
        {
            className: 'selections-area'
        }
    ))

    selections.forEach(({name, price}) => {
        selectionsArea.appendChild( Object.assign(
            document.createElement('button'),
            {
                innerHTML:
                    `<div>${name}</div>
                    <div>${price}</div>`,
                value: JSON.stringify({name, price})
            }
        ))
    })

    return market
}

;// CONCATENATED MODULE: ./src/components/EventCard.js


function EventCard ({name, markets}) {
    const [teamA, teamB] = name.split(' vs ')

    const card = document.createElement('div')
    card.classList.add('event-card')
    card.classList.add('grey-hover')


    card.appendChild( Object.assign(
        document.createElement('div'),
        {
            className:'event-name',
            innerHTML: name
                // `<p>${teamA}</p>
                // <p>vs</p>
                // <p>${teamB}</p>`,
        }
    ) )

    markets.forEach(marketData => {
        card.appendChild(Market({game:name, ...marketData}))
    })

    return card
}

;// CONCATENATED MODULE: ./src/components/ProductCard.js
function ProductCard (productData) {
    return Object.assign(
        document.createElement('li'),
        {
            className: 'product-card grey-hover',
            innerHTML:
                `<strong>${productData.name} to ${productData.market.split(" to ")[1]}</strong>
                 <p>${productData.price}</p>`
        }
    )
}
;// CONCATENATED MODULE: ./src/index.js





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

/******/ })()
;