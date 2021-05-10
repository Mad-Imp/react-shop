import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import LinearBuffer from "./LinearBuffer";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import AlertMessage from "./AlertMessage";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToCart = item => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);//проверяем, был ли ранее добавлен товар

        if (itemIndex < 0) { //если нет, то добавим новый и напишем в его количество 1
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else { //если был добавлен, ищем его позицию и увеличиваем количество именно этого товара еще на 1
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder); //меняем state заказа
        }
        setAlertName(item.name);
    }

    const removeFromCart = itemId => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    }

    const increaseQuantity = itemId => {
        const newOrder = order.map(el => {
            if(el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const decreaseQuantity = itemId => {
        const newOrder = order.map(el => {
            if(el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 1 ? newQuantity : 1,
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    }

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, []);

    return <main className='container content'>
        <Cart quantity={order.length} handleCartShow={handleCartShow}/>
        {loading ? <LinearBuffer/> : <GoodsList goods={goods} addToCart={addToCart}/>}
        {isCartShow && <CartList order={order}
                                 handleCartShow={handleCartShow}
                                 removeFromCart={removeFromCart}
                                 increaseQuantity={increaseQuantity}
                                 decreaseQuantity={decreaseQuantity}/>
        }
        { alertName && <AlertMessage name={alertName} closeAlert={closeAlert}/> }
    </main>
}

export default Shop;