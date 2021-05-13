import React, {useEffect, useContext} from 'react';
import {ShopContext} from "../context";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '32%',
        position: 'fixed',
        top: '12%',
        right: '10%',
        animation: 'fade-in 250ms ease-in-out'
    },
    text: {
        padding: 2,
        color: '#292929',
        fontSize: 13
    }
}));

export default function AlertMessage() {
    const classes = useStyles();
    const {alertName = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {clearTimeout(timerId)}
        //eslint-disable-next-line
    }, [alertName]);

    return (
        <div className={classes.root}>
            <Alert className={classes.text} severity="success" color="info">
                {alertName.toLowerCase()} добавлен в корзину.
            </Alert>
        </div>
    );
}