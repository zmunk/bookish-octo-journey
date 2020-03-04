import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import logo192 from '../logo192.png'
import CardTravelIcon from '@material-ui/icons/CardTravel';
import FlightIcon from '@material-ui/icons/Flight';



export class CardClass extends Component {
    constructor() {
        super()
        // this.state = {
        //     count: 0,
        this.classes = this.useStyles();
        [this.expanded, this.setExpanded] = React.useState(false);
        
        
        }

    
    useStyles = makeStyles(theme => ({
        root: {
            // maxWidth: 345,
            marginTop: 30,
            marginRight: 10,
            marginLeft: 10,
            float: 'left',
            maxWidth: 325,

            // borderStyle: 'none'
            // borderLeft: 'none',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));


    
    handleExpandClick = () => {
        this.setExpanded(!this.expanded);
    };


    render() {
        return (
            <Card className={this.classes.root} variant="outlined">
                <CardHeader
                    avatar={

                        this.props.index == 1 ? <FlightIcon /> : <CardTravelIcon />
                    }
                    // avatar={
                    //             <Avatar aria-label="recipe" className={this.classes.avatar}>
                    //                 Ra
                    //   </Avatar>
                    // }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Istanbul - Berlin"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={this.classes.media}
                    image={logo192}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body1" component="p">
                        I am travling on monday, and I have enough space. Please contact me if you want to deliver anything.
        </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon  />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(this.classes.expand, {
                            [this.classes.expandOpen]: this.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {/* <Typography paragraph>Method:</Typography> */}
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
          </Typography>

                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring.
          </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default CardClass

