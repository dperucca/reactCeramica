import {useState} from "react"
import ItemCounter from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {

    const show = useState(true)

    const handleOnAdd = (quantity) => {
        console.log(`se agrega ${quantity} al carrito`)
    }


    return(
        <div>
            <h1>{props.greeting}</h1>
            { show ? <ItemCounter initial={0} stock={10} onAdd={handleOnAdd}/> :null}
        </div>
    )
}

export default ItemListContainer