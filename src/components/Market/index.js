import './style.css'

export function Market ({eventID, id:marketID, name:marketName, selections}, callback){
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
    market.dataset.market = marketName

    market.appendChild( Object.assign(
        document.createElement('p'),
        {
            innerHTML: marketName
        }
    ))

    const selectionsArea = market.appendChild( Object.assign(
        document.createElement('div'),
        {
            className: 'selections-area'
        }
    ))

    selections.forEach(({id:selectionID, name:selectionName, price}) => {
        const desc = `${selectionName} to ${marketName.split(' to ')[1]}`
        selectionsArea.appendChild( Object.assign(
            document.createElement('button'),
            {
                innerHTML: `<div>${selectionName}</div> <div>${price}</div>`,
                value: JSON.stringify({eventID, marketID, selectionID, desc}),
                onclick: handleBetButtonClick,
            }
        ))
    })

    return market
}
