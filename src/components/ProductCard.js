export function ProductCard (productData) {
    return Object.assign(
        document.createElement('li'),
        {
            className: 'product-card grey-hover',
            innerHTML:
                `<strong>${productData.name} to ${productData.market.split(" to ")[1]}</strong>
                 <p>${productData.price}</p>`
        }
    )
}