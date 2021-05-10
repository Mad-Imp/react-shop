import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '3rem',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    repo: {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'uppercase'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        React Shop
                    </Typography>
                    <a className={classes.repo} href="https://github.com/Mad-Imp/react-shop" target="_blank" rel="noreferrer" color="inherit" >Репозиторий</a>
                </Toolbar>
            </AppBar>
        </div>
    );
}