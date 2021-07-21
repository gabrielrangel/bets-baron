import './style.css'

export function Checkout(){
    const productList = document.querySelector('.product-list')
    const wrapper = document.querySelector('.checkout-wrapper')

    const ProductCard  = (productData) => Object.assign(
        document.createElement('output'),
        {
            className: 'product-card grey-hover',
            innerHTML:
                `<strong>${productData.name} to ${productData.market.split(" to ")[1]}</strong>
             <p>${productData.price}</p>`
        }
    )

    const handleCheckout = (e) => {
        e.preventDefault()
    }

    const slipViewToggle = () => {
        const display = wrapper.style.display === 'none'
        wrapper.style.display = !display ? 'none' : 'flex'
    }


    this.list = () => Array.from(productList.children)

    this.render = () => {
        this.list().forEach(card => {
            card.remove()
        })

        document.querySelectorAll('.selections-area .green')
            .forEach((button)=>{
                productList.appendChild(
                    ProductCard({
                        ...button.parentNode.parentNode.dataset,
                        ...JSON.parse(button.value)
                    })
                )
            })
    }

    document.querySelector('#checkout').addEventListener('submit', handleCheckout)

    document.querySelectorAll('.slip-view-toggle').forEach(toggle => {
        toggle.addEventListener('click', slipViewToggle)
    })
}
