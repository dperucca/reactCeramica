import ItemCounter from "../ItemCount/ItemCount"

const ItemDetail = ({ name, img, stock, description, price}) => {
    return(
        <section>
            <ul>
                <li>
                    <h3>{name}</h3>
                    <picture>
                        <img className="CartImg" src={img} alt={name}/>
                    </picture>
                    <div>{description}</div>
                    <div>stock disponible: {stock}</div>
                    <div>${price}</div>
                    <ItemCounter />
                </li>
            </ul>
        </section>
    )
}

export default ItemDetail