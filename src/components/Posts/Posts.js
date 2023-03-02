import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return (
        !posts.length 
        ? <CircularProgress/> 
        : (
            <Grid 
                className={classes.container}
                container
                alignItems='stretch'
            >

            </Grid>
        )
    );
};

export default Posts;