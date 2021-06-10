import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginTop: "10%"

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const usernamehandleChange = event => {

    console.log(event.target.value)

    setusername(event.target.value)

  }

  const passwordhandleChange = event => {

    console.log(event.target.value)

    setpassword(event.target.value)

  }

  function login() {

    if (username == "") {
      alert("Please enter Username ")
    }
    else if (password == "") {
      alert("Please enter Password ")
    }

    else if (username == "test" && password == "test") {

      props.history.push('./AdmissionDetails');
      localStorage.setItem("phonenumber", username);
      localStorage.setItem("login", 0);



    }



    else {

      alert("Entered Username and Password is incorrect")
    }


  }




  var bg = require('./amb.jpg')


  return (

    // <div className='background-image' style ={ {  backgroundImage: `url(${bg})`,
    <div className='background-image' style ={ {  backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' ,
    bottom:20  } }>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} >

          <h5 style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: 'black', marginTop: "50%" }}> EMISSION CONTROL
</h5>        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>


          <h1 style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: "5%" }}>        LOGIN
</h1>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Username"
              label="User Name"
              name="Username"
              autoFocus
              value={username}
              onChange={usernamehandleChange}
            

            />


            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={passwordhandleChange}


            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => { login() }}
            >
              LOG IN
          </Button>

          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
