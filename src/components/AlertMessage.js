import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
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

export default function AlertMessage({name = '', closeAlert = Function.prototype}) {
    const classes = useStyles();

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {clearTimeout(timerId)}
    }, [name]);

    return (
        <div className={classes.root}>
            <Alert className={classes.text} severity="success" color="info">
                {name.toLowerCase()} добавлен в корзину.
            </Alert>
        </div>
    );
}