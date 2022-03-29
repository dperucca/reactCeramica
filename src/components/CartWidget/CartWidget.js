import './CartWidget.css'

const CartWidget = (props) => {
    return(
        <img className="cartImg" src="./images/cartImage.png" alt="img">{props.cart}</img>
    )
}

export default CartWidget