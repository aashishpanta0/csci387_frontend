import React, {useState} from 'react'
import { Menu } from 'antd';
import {HomeOutlined,
    UsergroupAddOutlined,
  
  MessageOutlined,
  LoginOutlined
} from '@ant-design/icons';
import './Header.css'

const { SubMenu } = Menu;

const Header=()=> {
  
  const [current, setCurrent]=useState('mail');


   
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
        
        <Menu.Item  className="navbaritems" onClick={()=>window.location.href="/login"}>
           
              <LoginOutlined />
            Login/SignUp
           
        </Menu.Item>
      </Menu>
    );
  
}
export default Header;
