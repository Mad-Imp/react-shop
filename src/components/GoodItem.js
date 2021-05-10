import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        maxHeight: 560,
        margin: '20px 8px',
    },
    media: {
        height: 290,
        width: 300
    },
    price: {
        display: 'block',
        marginRight: 10,
        color: '#3f51b5',
        fontSize: '1.15rem'
    },
    title: {
        fontSize: '1.2rem'
    },
    btn: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default function GoodItem({
                                     id,
                                     name,
                                     description,
                                     price,
                                     full_background,
                                     addToCart = Function.prototype,
                                 }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={full_background} alt={name.toLowerCase()}
                />
                <CardContent>
                    <Typography className={classes.title}
                                gutterBottom
                                variant="h5"
                                component="h2">
                        {name.toLowerCase()}
                    </Typography>
                    <Typography variant="body2"
                                color="textSecondary"
                                component="p">
                        {description.toLowerCase()}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button className={classes.btn}
                        onClick={() => addToCart({id, name, price})}
                        size="small"
                        color="primary">
                    Купить
                </Button>
                <Typography className={classes.price}
                            gutterBottom
                            variant="h6"
                            component="h3">
                    {`${price} В-баксов`}
                </Typography>
            </CardActions>
        </Card>
    );
}