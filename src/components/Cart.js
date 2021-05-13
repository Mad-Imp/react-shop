import {useContext} from "react";
import {ShopContext} from "../context";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Cart() {
    const {order, handleCartShow = Function.prototype} = useContext(ShopContext);
    const quantity = order.length;
    return <div className="cart" onClick={handleCartShow}>
        <ShoppingCartIcon className="cart-icon"/>
        {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
}

export default Cart;