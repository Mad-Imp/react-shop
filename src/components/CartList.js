import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from "./CartItem";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '35rem',
        maxWidth: '85%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        animation: 'show 500ms ease-in-out',

    },
    container: {
        maxWidth: '100%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,

    },
    title: {
        margin: theme.spacing(1, 0, 1),
        color: '#292929'
    },
    close: {
        cursor: 'pointer',
        position: 'absolute',
        top: '1rem',
        right: '1rem',
    },
}));

export default function CartList(props) {
    const classes = useStyles();
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        increaseQuantity = Function.prototype,
        decreaseQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" className={classes.title}>Корзина</Typography>
                    <div className={classes.demo}>
                        <List>
                            {order.length ? order.map(item => (
                                <CartItem key={item.id}
                                          {...item}
                                          removeFromCart={removeFromCart}
                                          increaseQuantity={increaseQuantity}
                                          decreaseQuantity={decreaseQuantity}/>
                            )) : <Typography variant="h6" className={classes.title}>Корзина пуста</Typography>
                            }
                        </List>
                    </div>
                    <Typography variant="h6" className={classes.title}>Общая стоимость: {totalPrice} В-баксов</Typography>
                    <Button
                        size="medium"
                        color="primary">
                        Купить
                    </Button>

                    <CloseIcon className={classes.close} onClick={handleCartShow}/>
                </Grid>
            </Grid>
        </div>
    );
}

