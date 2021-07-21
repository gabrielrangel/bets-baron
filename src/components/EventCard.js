import {Market} from "./Market.js";

export function EventCard ({name, markets}) {
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
