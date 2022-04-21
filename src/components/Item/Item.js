import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price}) => {
    return(
        <section className="CartItem">
            <h3>{name}</h3>
            <picture>
                <img className="CartImg" src={img} alt={name}/>
            </picture>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
            <div>$ {price}</div>
        </section>
    )
}

export default Item