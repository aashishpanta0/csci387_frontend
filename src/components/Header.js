import React, {useState, useEffect} from 'react'
import { Menu } from 'antd';
import {verifyuser} from '../routes/verifyuser';
 
import {Redirect} from 'react-router-dom';
import {HomeOutlined,
    UsergroupAddOutlined,
  
  MessageOutlined,
  LoginOutlined
} from '@ant-design/icons';
import './Header.css'


const Header=()=> {

  const [name, setName]=useState('');
  const [loggedin, setloggedin]= useState(true);
  

useEffect(()=>{
  
  verifyuser((result)=>{
   
    if(result.status===200){
      setName(result.data.name)
      setloggedin(result.data.isValid);
    }
    
})})
if(!loggedin){

  return  <Redirect to = '/login' /> 
}

const usertype= localStorage.getItem('usertype');
if(usertype==='Student'){
  return (
    <Menu theme='light'   mode="horizontal" className="navbar">
       <Menu.Item key="3"  disabled={true} className="logo">OleMiss Registers</Menu.Item>
      <Menu.Item className="navbaritems" onClick={()=>window.location.href="/"        }>
        <HomeOutlined />
        Homepage
      </Menu.Item>
      <Menu.Item className="navbaritems" onClick={()=>window.location.href="/registration"} >
      <UsergroupAddOutlined />
          Registration
      </Menu.Item>
      <Menu.Item className="navbaritems" onClick={()=>window.location.href="/contactus"} >
      <MessageOutlined />
        Contact Us
      </Menu.Item>
      
      <Menu.Item  className="navbaritems" onClick={()=>{
        localStorage.clear()
        setloggedin(false)
        }}>
         
            <LoginOutlined />
          Logout 
         
      </Menu.Item>
      <Menu.Item  className="navbaritems" disabled={true}>
          {name}
         
      </Menu.Item>
    </Menu>
  );

}
if(usertype==='Department'){
  return (
    <Menu theme='light'   mode="horizontal" className="navbar">
       <Menu.Item key="3"  disabled={true} className="logo">OleMiss Registers</Menu.Item>
      <Menu.Item className="navbaritems" onClick={()=>window.location.href="/"        }>
        <HomeOutlined />
        Homepage
      </Menu.Item>
      <Menu.Item className="navbaritems" onClick={()=>window.location.href="/admin/registercourse"} >
      <UsergroupAddOutlined />
          Registration
      </Menu.Item>
      <Menu.Item className="navbaritems" onClick={()=>window.location.href="/contactus"} >
      <MessageOutlined />
        Contact Us
      </Menu.Item>
      
      <Menu.Item  className="navbaritems" onClick={()=>{
        localStorage.clear()
        setloggedin(false)
        }}>
         
            <LoginOutlined />
          Logout 
         
      </Menu.Item>
      <Menu.Item  className="navbaritems" disabled={true}>
          {name}
         
      </Menu.Item>
    </Menu>
  );

}
else {
  return null;
}
   
    
  
}
export default Header;
