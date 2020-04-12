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
     
    return (<div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}><div style={{flexGrow:1}}><Header />
      <Menu   mode="horizontal">
        <Menu.Item key="mail" onClick={()=>{ setviewtab('View All Courses')}}>
          <FolderViewOutlined />
          View All Courses
        </Menu.Item>
        <Menu.Item key="app" onClick={()=>{ setviewtab('Add Courses')}}>
          <AppstoreAddOutlined />
        My Favourites
        </Menu.Item>
        
        <Menu.Item key="alipay" onClick={()=>{ setviewtab('My Courses')}}>
            
              <SettingOutlined />
              My Courses
           
        </Menu.Item>
           
       
        
      </Menu>
    
     
    <RegistrationTabs display={viewtab} />
    </div>
    <Footer />
    </div>);
};

 

export default Registration;