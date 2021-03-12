import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import { connect } from "react-redux"
import { removeCards, addCards } from '../store/action/action'
import style from './Cards.module.css'


const useStyles = makeStyles({
    root: {
        maxWidth: 270,
    },
    media: {
        height: 140,
    },
    color: {
        backgroundColor: purple[500],
    }
});

function MediaCard(props) {
    let { name, src, index, cards, empty, btnText, removeCards, addCards } = props
    const classes = useStyles();

    let remove = (i) => {
        console.log("removeProps", props)
        let updateCards = [...cards]
        let removeLeft = updateCards.splice(i, 1)
        console.log("removeLeft", removeLeft)
        removeCards(updateCards, empty, removeLeft)
    }

    let add = (i) => {
        console.log("addProps", props)
        let updateEmpty = [...empty]
        let addLeft = updateEmpty.splice(i, 1)
        // console.log("addLeft", addLeft)
        addCards(updateEmpty, cards, addLeft)
    }

    return (
        <div>
            <div className={style.containers}>
                <img src={src} alt={name} className={style.image} />
                {/* <div className={style.middle}> */}
                <Button className={style.middle} onClick={() => (btnText === "Add") ? add(index) : remove(index)}
                    variant="contained" size="small" > {btnText}</Button>
                {/* </div> */}
            </div>
            {/* <Card className={`cards ${classes.root}`}>
                <CardActionArea className="cardAction">
                    <CardMedia style={{ height: 140, width: 170 }}
                        className={classes.media}
                        image={src}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="middle">
                    <Button onClick={() => (btnText === "Add") ? add(index) : remove(index)}
                        variant="outlined" size="small" color="primary"> {btnText}</Button>
                </CardActions>
            </Card> */}
        </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.app.cards,
    empty: state.app.empty,
    email: state.app.email,
    counter: state.app.counter,
})

const mapDispatchToProps = dispatch => {
    return {
        removeCards: (a, b, c) => dispatch(removeCards(a, b, c)),
        addCards: (a, b, c) => dispatch(addCards(a, b, c)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);  