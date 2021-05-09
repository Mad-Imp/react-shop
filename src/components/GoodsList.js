import GoodItem from "./GoodItem";

function GoodsList({goods = [], addToCart = Function.prototype}) {
    if (!goods.length) {
        return (<h3>Здесь ничего нет</h3>)
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodItem key={item.id} {...item} addToCart={addToCart}/>
        ))}
    </div>
}

export default GoodsList;