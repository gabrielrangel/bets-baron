/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Market/index.js


function Market ({game, name, selections}, callback){
    const handleBetButtonClick = (e) => {
        const isButton = e.target.tagName === 'BUTTON'
        const button = isButton ? e.target : e.target.parentNode

        const isClicked = button.classList.contains('green')

        isClicked || Array.from(button.parentNode.children).forEach(button => button.classList.remove('green'))
        isClicked ? button.classList.remove('green') : button.classList.add('green')

        callback()
    }

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
                value: JSON.stringify({name, price}),
                onclick: handleBetButtonClick
            }
        ))
    })

    return market
}

;// CONCATENATED MODULE: ./src/components/EventCard/index.js



function EventCard ({name, markets}, callback) {
    const [teamA, teamB] = name.split(' vs ')

    const card = document.createElement('div')
    card.classList.add('event-card')
    card.classList.add('grey-hover')


    card.appendChild( Object.assign(
        document.createElement('div'),
        {
            className:'event-name',
            innerHTML: name
        }
    ) )

    markets.forEach(marketData => {
        card.appendChild(Market({game:name, ...marketData}, callback))
    })

    return card
}

;// CONCATENATED MODULE: ./src/components/Checkout/index.js


function Checkout(){
    const productList = document.querySelector('.product-list')
    const wrapper = document.querySelector('.checkout-wrapper')

    const ProductCard  = (productData) => Object.assign(
        document.createElement('output'),
        {
            className: 'product-card grey-hover',
            innerHTML:
                `<strong>${productData.name} to ${productData.market.split(" to ")[1]}</strong>
             <p>${productData.price}</p>`
        }
    )

    const handleCheckout = (e) => {
        e.preventDefault()
    }

    const slipViewToggle = () => {
        const display = wrapper.style.display === 'none'
        wrapper.style.display = !display ? 'none' : 'flex'
    }


    this.list = () => Array.from(productList.children)

    this.render = () => {
        this.list().forEach(card => {
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

    document.querySelector('#checkout').addEventListener('submit', handleCheckout)

    document.querySelectorAll('.slip-view-toggle').forEach(toggle => {
        toggle.addEventListener('click', slipViewToggle)
    })
}

;// CONCATENATED MODULE: ./src/index.js





window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        document.querySelector('header').classList.add('fixed')
        document.querySelector('main').classList.add('fixed')
    } else {
        document.querySelector('header').classList.remove('fixed')
        document.querySelector('main').classList.remove('fixed')
    }

}

fetch('https://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then((res) => res.json())
    .then((data) => {
        const main = document.querySelector('main')
        const checkout = new Checkout()

        data.forEach(({markets, ...event}) => {
            markets.length > 0 && main.appendChild(EventCard({markets, ...event}, checkout.render))
        })
    })

/******/ })()
;