export function ProductList(){
    const list = {}

    this.add = ({game}) => {
        list[game] || Object.defineProperty(list, game, {value:{}})
    }
}