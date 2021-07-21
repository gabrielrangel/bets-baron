import {EventCard} from "./components/EventCard";
import {Checkout} from "./components/Checkout";

import './style.css'

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
