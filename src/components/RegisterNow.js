import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Select } from 'antd';
import {createuser} from '../routes/adminroutes'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
 
const { Option} = Select;

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterNow = props => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [olemissid, setolemissid] = useState();
  const [password, setpassword] = useState();
  const [message, errormessage] = useState();
  const [email, setemail] = useState();
  const [user,setuser]=useState();

const submitsignup=()=>{
  if(!email.includes('go.olemiss.edu')){
    return alert('Please enter a valid olemiss id');
  }
 
   if(user!=="Student" && user!=="Department" && user!=="Teacher"){
     return alert('Please select a user type.');
   }
  
  const formValues={
    name:firstname+" "+lastname,
    email:email,
    password:password,
    olemissid:olemissid,
    userType:user
  }
  createuser(formValues,(result)=>{
    console.log(result)
  })

   

}


  const classes = useStyles();


  return <div> <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        {/* <LockOutlinedIcon /> */}
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate >
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(event) => {
                setfirstname(event.target.value)
              }}
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(event) => {
                setlastname(event.target.value)
              }}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              onChange={(event) => {
                setolemissid(event.target.value)
              }}
              variant="outlined"
              required
              type="number"
              fullWidth
              id="lastName"
              label="Olemiss Id"
              name="olemissid"
              autoComplete="olemissid"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Select defaultValue="You are a" style={{ width: 400 }, { fontSize: 16 }} onChange={(value)=>setuser(value)}>

              <Option value="Student">Student</Option>
              <Option value="Department">Department</Option>
              <Option value="Teacher">Teacher</Option>

            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(event) => {
                setemail(event.target.value)
              }}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(event) => {
                setpassword(event.target.value)
              }}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(event) => {
                const password2 = event.target.value
                if (password !== password2) {
                  errormessage('password doesnot match')
                }
                else {
                  errormessage('Password matched')
                }
              }
              }
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="passwordagain"
              autoComplete="password-again"
            />
          </Grid>
          <p style={{ color: 'red' }}> {message}</p>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I agree to all terms and conditions."
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          // className={classes.submit}
          onClick={()=>submitsignup()}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link onClick={() => window.location.href = "/login"} variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={5}>

    </Box>
  </Container></div>;
};



export default RegisterNow;