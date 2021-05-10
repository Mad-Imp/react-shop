import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles((theme) => ({
    item: {
        borderBottom: '1px solid #dedede',
        paddingTop: 4,
        paddingBottom: 4,
    },
    delete: {
        width: '20px',
        height: '20px'
    },
    icon: {
        cursor: 'pointer',
        width: '1.2rem',
        height: '1.2rem',
        margin: '0 10px',
        verticalAlign: 'middle',
        color: '#3c4ab3'
    },
    price: {
        fontWeight: 600,
        fontSize: '1.1rem',
    }


}));

function CartItem({
                      id,
                      name,
                      price,
                      quantity,
                      removeFromCart = Function.prototype,
                      increaseQuantity = Function.prototype,
                      decreaseQuantity = Function.prototype
                  }) {
    const classes = useStyles();
    return (
        <ListItem className={classes.item}>
            <ListItemText> {name.toLowerCase()}
                <RemoveIcon className={classes.icon} onClick={() => decreaseQuantity(id)}/>
                {quantity}
                <AddIcon className={classes.icon} onClick={() => increaseQuantity(id)}/>
                <span className={classes.price}> {price * quantity}</span> В </ListItemText>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon className={classes.delete} onClick={() => removeFromCart(id)}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CartItem;