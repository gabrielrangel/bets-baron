export function Card (innerHTML) {
    return Object.assign( document.createElement('div'), {
        className: 'card',
        innerHTML
    })
}