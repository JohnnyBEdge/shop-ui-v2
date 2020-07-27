import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const ItemThumbNail = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={props.item.img} alt={props.item.name} />
            </div>
            <h4 className={classes.itemName}>{props.item.name}</h4>
            <p className={classes.itemPrice}>Price: ${props.item.price}</p>
        </div>
    )
}
const useStyles = makeStyles(() => ({
    container: {
        width: "1fr",
        height: "auto",
        border: "solid black 1px",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .1s ease-in-out",
        color: "rgb(45, 42, 42)",

        "&:hover": {
            transform: "scale(1.1)"
        },
    },
 
    itemName: {
        padding: 0,
        margin: 5,
        fontSize: 20,
        maxWidth: 225,
    },
    itemPrice: {

    },
    img: {
        width: 150,
        margin: 10
    }
  }));

export default ItemThumbNail;