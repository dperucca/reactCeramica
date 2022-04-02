import ItemCounter from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {
    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemCounter />
        </div>
    )
}

export default ItemListContainer