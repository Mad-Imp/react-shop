export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);//проверяем, был ли ранее добавлен товар
            let newOrder = null;
            if (itemIndex < 0) { //если нет, то добавим новый и напишем в его количество 1
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem]
            } else { //если был добавлен, ищем его позицию и увеличиваем количество именно этого товара еще на 1
                newOrder = state.order.map((orderItem, index) => {
                    if(index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            }
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(el => el.id !== payload.id)
            }
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                order: state.order.map(el => {
                    if(el.id === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity
                        }
                    } else {
                        return el;
                    }
                })
            }
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                order: state.order.map(el => {
                    if(el.id === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 1 ? newQuantity : 1,
                        }
                    } else {
                        return el;
                    }
                })
        }
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartShow: !state.isCartShow,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        default:
            return state;
    }
}