import {EventCard} from "./Components/EventCard.js";

fetch('https://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then((res) => res.json())
    .then((data) => {
        const main = document.querySelector('main')

        data.forEach((event) => {
            event.markets.length > 0 && main.appendChild(EventCard(event))
        })
    })
