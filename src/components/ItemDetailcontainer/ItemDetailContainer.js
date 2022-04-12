import {useState, useEffect} from "react"
import {getProductsById} from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = (props) => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsById().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return(
        <div>
            {products.map(prod => <ItemDetail key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemDetailContainer