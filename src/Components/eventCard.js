import {Market} from "./Market.js";

export function EventCard ({name, markets}) {
    const [teamA, teamB] = name.split(' vs ')

    const card = document.createElement('div')
    card.classList.add('event-card')

    const eventName = document.createElement('div')
    eventName.classList.add('event-name')
    eventName.innerHTML = `<p>${teamA}</p> <p>vs</p> <p>${teamB}</p>`



    card.appendChild(eventName)

    markets.forEach(marketData => {
        card.appendChild(Market(marketData))
    })

    return card
}