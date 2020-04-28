import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Footer from './Footer'

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Select } from 'antd';
import {loginadmin} from '../routes/adminlogin';
import {verifyuser} from '../routes/verifyuser';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
const { Option, OptGroup } = Select;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://news.olemiss.edu/wp-content/uploads/2017/02/Rankings1-1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = props => {
  useEffect(()=>{
    verifyuser((result)=>{
   
      if(result.status===200){
        console.log(result)
        setloggedin(result.data);
        
      }
  })}, []);

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [user, setuser]= useState();
  const [loggedin, setloggedin]= useState(false);
  

  const submitlogin=()=>{
    if(!email.includes('go.olemiss.edu')){
      return alert('Please enter a valid olemiss id');
    }
   
     if(user!=="Student" && user!=="Department"  ){
       return alert('Please select a user type.');
     }
     const formvalues={
      user:user,
      email: email,
      password:password
    }
    loginadmin(formvalues, (result)=>{
      if(result.status===200){
        
        localStorage.setItem("token", result.data.token)
        localStorage.setItem("usertype", result.data.user);
        setloggedin(true)
        // window.location.href="http://localhost:3000/"
      }
    }
      
    )
  }
  const classes = useStyles();
if(loggedin){
  return  <Redirect to = '/' /> 
}
  return (<div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}><div style={{flexGrow:1}}>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(event => {
                setemail(event.target.value)
              })}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your OleMiss Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(event => {
                setpassword(event.target.value)
              })}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Select defaultValue="You are a" style={ { fontSize: 16 }} onChange={(value)=>setuser(value)}>

              <Option value="Student">Student</Option>
              <Option value="Department">Department</Option>
               

            </Select>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              
              fullWidth
              variant="contained"
              color="primary"
              onClick={()=>submitlogin()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={() => window.location.href = "/register"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>

            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
    <Footer />
    </div>
  );


};

// ReactDOM.render(<NormalLoginForm />, mountNode);

export default Login;