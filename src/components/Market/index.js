import './style.css'

export function Market ({game, name, selections}, callback){
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
