import React from 'react';
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
import EmailIcon from '@material-ui/icons/Email';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import logo192 from '../logo192.png'
import CardTravelIcon from '@material-ui/icons/CardTravel';
import FlightIcon from '@material-ui/icons/Flight';


const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 345,
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
        float:'left',
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

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [liked, setLiked] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleLikedActivity = () => {
        setLiked(!liked);
    };

    // var liked = false;
    // const likedClicked = (e) => {
    //     // console.log(e)
    //     liked = true;
    //     console.log(liked, 'hi')
    // }
    // var favoriteIconStyle = { 
    //     color: liked ? 'red' : 'white' 
    // } 

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar = {
                
                    props.index == 1 ? <FlightIcon/>: <CardTravelIcon/> 
                }
                // avatar={
        //             <Avatar aria-label="recipe" className={classes.avatar}>
        //                 Ra
        //   </Avatar>
                // }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                
                // title="Istanbul - Berlin"
                
                title={props.tripData.from + ' - ' + props.tripData.to} 
                subheader={props.tripData.date}
            />
            <CardMedia
                className={classes.media}
                image={logo192}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body1"  component="p">
                    I am travling on monday, and I have enough space. Please contact me if you want to deliver anything. 
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"
                            onClick={handleLikedActivity}
                >
                    <FavoriteIcon  style={{color: liked? '#3ac659': '757575' }}/>
                </IconButton>
                <IconButton aria-label="contact">
                    <EmailIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <h6>See Details</h6>
                    <ExpandMoreIcon />

                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
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
    );
}