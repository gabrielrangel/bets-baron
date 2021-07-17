import {Market} from "./Market.js";

export function EventCard ({name, markets}) {
    const [teamA, teamB] = name.split(' vs ')

    const card = document.createElement('div')
    card.classList.add('event-card')

    card.appendChild( Object.assign(
        document.createElement('div'),
        {
            className:'event-name',
            innerHTML:
                `<p>${teamA}</p>
                <p>vs</p>
                <p>${teamB}</p>`
        }
    ) )

    markets.forEach(marketData => {
        card.appendChild(Market(marketData))
    })

    return card
}