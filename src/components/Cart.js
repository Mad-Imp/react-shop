import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Cart({quantity = 0, handleCartShow = Function.prototype}) {
    return <div className="cart" onClick={handleCartShow}>
        <ShoppingCartIcon className="cart-icon"/>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
}

export default Cart;