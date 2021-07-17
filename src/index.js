import {Card} from "./Components/card.js";

fetch('https://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then((res) => res.json())
    .then((data) => {
        const main = document.querySelector('main')

        data.forEach((event) => {
            main.appendChild(Card(JSON.stringify(event)))
        })
    })
