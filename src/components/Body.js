import React, {useState}from 'react';
import './Header.css';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { BoldOutlined } from '@ant-design/icons';
const Body =() => {
  const Cardbox=(props)=>{
    return(
    <Card  bordered={false}  
    style={{display:'flex',
            width:'400px',
            height:'200px',
            backgroundColor:'#ececec',
            justifyContent:'center',
            alignItems:'center',
            padding:0,
            boxShadow: "0px 0px 20px 5px rgb(100, 160, 40)",
     
            margin:0}}>
      {props.message}
    </Card>
  );
  }

  const info=[<span style={{fontSize:30, cursor: "pointer"}} onClick={()=>window.location.href='./registration'} onMouseOver=""> Want to register your classes?  Please click here</span>,
  <span style={{fontSize:30, cursor: "pointer"}} onClick={()=>window.location.href='./contactus'} onMouseOver="">Want to know more? Click here to contact us</span>, 
  <span style={{fontSize:30, cursor: "pointer"}} onClick={()=>window.location.href='./login'} onMouseOver="">You can just sign up here, and you will be ready to register your class shortly!</span> ]


    return (<div><div className='bodydiv'></div>
        <div className="bodymain">Olemiss Registrar is dedicated to make the process of registering classes easier for students. We provide students with an easy way to manage classes so that they can focus on building their career. Furthermore, Olemiss Registrar also supports teacher side access to manage their own courses, students etc. If you don't have an account yet sign up and get access to all our features.</div>
        <div className='cardDiv'>{info.map(message=>{
          return( 
            <Cardbox message = {message}/>
          )
          })} 
        </div>
        
    
    
    
    </div>);



};

 

export default Body;