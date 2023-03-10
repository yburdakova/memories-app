import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import GoogleLogin from 'react-google-login'
import Icon from './icon.js'
import Input from './Input.js';
import useStyles from './styles.js';

const Auth = () => {
    const [showPassowrd, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState (false);
    
    const classes = useStyles();

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);
    const switchMode = () => {
        setIsSignup(prevIsSignup => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = (res) => {
        console.log(res);
    };
    const googleFailure = () => {
        console.log('Google Sign In was unsuccessfull. Try again later!');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                <Typography>{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                            </>
                        )}
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                        <Input 
                            name='password' 
                            label='Password' 
                            handleChange={handleChange} 
                            type={showPassowrd ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
                    </Grid>
                    
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="559736122256-mbsprp53cp9s4eao0f8rqi5o4jkli67g.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon/>}
                                variant='contained'
                            >Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    >
                    </GoogleLogin>
                    <Grid container justifyContent='flex-end'>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : 'Don`t have an account? Sign Up'}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;