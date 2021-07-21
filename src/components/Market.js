export function Market ({game, name, selections}){
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
