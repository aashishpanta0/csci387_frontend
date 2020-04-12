import React ,{useState} from 'react';
import RegistrationTabs from '../components/Registrationtab'
import Footer from './Footer';
import Header from './Header';

import { Menu } from 'antd';
import {
    FolderViewOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;
const Registration = props => {
    const [viewtab, setviewtab]= useState('View All Courses')
     
    return (<div><Header />
      <Menu   mode="horizontal">
        <Menu.Item key="mail" onClick={()=>{ setviewtab('View All Courses')}}>
          <FolderViewOutlined />
          View All Courses
        </Menu.Item>
        <Menu.Item key="app" onClick={()=>{ setviewtab('Add Courses')}}>
          <AppstoreAddOutlined />
         Add Courses
        </Menu.Item>
        
        <Menu.Item key="alipay" onClick={()=>{ setviewtab('My Courses')}}>
            
              <SettingOutlined />
              My Courses
           
        </Menu.Item>
           
       
        
      </Menu>
    
     
    <RegistrationTabs display={viewtab} />
    
    <Footer />
    </div>);
};

 

export default Registration;