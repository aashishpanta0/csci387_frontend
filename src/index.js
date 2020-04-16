import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Header.css'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Body';

import RegistrationPage from './components/Registration';
import ContactPage from './components/Contact';
import LoginPage from './components/Login';
import 'antd/dist/antd.css';
import RegisterNow from './components/RegisterNow';
import Adminregistration from './components/Adminregistration';
 
 


ReactDOM.render(

  <BrowserRouter >
  
 
  <Switch>
 <Route exact path='/' component ={Homepage}/>
 <Route path='/registration' component ={RegistrationPage}/>
 <Route path = '/admin/registercourse' component={Adminregistration} />
 <Route path='/contactus' component ={ContactPage}/>
 <Route path='/login' component ={LoginPage}/>
 <Route path='/register' component ={RegisterNow}/>

  
 


  </Switch>
  
  
 
  
  </BrowserRouter>
  
    
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
