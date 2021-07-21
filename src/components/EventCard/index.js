import {Market} from "../Market";
import './style.css'

export function EventCard ({name, markets}, callback) {
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
