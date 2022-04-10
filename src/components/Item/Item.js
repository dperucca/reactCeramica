import './Item.css'

const Item = ({ name, img, stock}) => {
    return(
        <section className="CartItem">
            <h3>{name}</h3>
            <picture>
                <img className="CartImg" src={img} alt={name}/>
            </picture>
            <button>Ver Detalle</button>
            <div>stock disponible: {stock}</div>
        </section>
    )
}

export default Item