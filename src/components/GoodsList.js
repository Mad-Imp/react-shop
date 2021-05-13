import {useContext} from "react";
import {ShopContext} from "../context";
import GoodItem from "./GoodItem";

function GoodsList() {
    const {goods = []} = useContext(ShopContext);
    if (!goods.length) {
        return (<h3>Здесь ничего нет</h3>)
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodItem key={item.id} {...item}/>
        ))}
    </div>
}

export default GoodsList;