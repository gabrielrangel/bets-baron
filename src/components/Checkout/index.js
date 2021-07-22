import './style.css'



export function Checkout(rawData){
    const productList = document.querySelector('.product-list')

    const list = () => Array.from(productList.children)

    const selected = () => document.querySelectorAll('.selections-area .green')

    const getPrice = ({eventID, marketID, selectionID}) => {
        const eventIndex = rawData.findIndex(({id}) => id === eventID)

        const {markets} = rawData[eventIndex]
        const marketIndex = markets.findIndex(({id}) =>id === marketID)

        const {selections} = markets[marketIndex]
        const selectionIndex = selections.findIndex(({id}) => id === selectionID)

        const {price} = selections[selectionIndex]
        return price
    }

    const total = () => {
        return Array.from(selected(), (button) => getPrice(JSON.parse(button.value)))
            .reduce((total, unitPrice) => total + unitPrice)
    }

    const handleCheckout = (e) => {
        e.preventDefault()
    }

    const slipViewToggle = () => {
        const wrapper = document.querySelector('.checkout-wrapper')
        const display = wrapper.style.display === 'none'
        wrapper.style.display = !display ? 'none' : 'flex'
        document.querySelector('body').classList[!display ? 'remove' : 'add']('slip-view')
    }

    this.ProductCard = ({desc, ...ids}) => {
        return Object.assign( document.createElement('output'), {
            className: 'grey-hover',
            innerHTML: `${desc} <span>${getPrice(ids)}</span>`
        })
    }

    this.render = () => {
        list().forEach(card => card.remove())

        selected().forEach((button)=>{
            productList.appendChild( this.ProductCard(JSON.parse(button.value)) )
        })

        document.querySelector('#total').innerHTML = `<span>$</span> ${total()}`
    }

    document.querySelector('#checkout').addEventListener('submit', handleCheckout)

    document.querySelectorAll('.slip-view-toggle').forEach(toggle => {
        toggle.addEventListener('click', slipViewToggle)
    })
}
