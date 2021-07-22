import {Market} from "../Market";
import './style.css'

export function EventCard ({name, markets, id}, callback) {
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

    markets.forEach(markets => {
        card.appendChild(Market({eventID:id, ...markets}, callback))
    })

    return card
}
