import React from 'react';
import {verifyuser} from '../routes/verifyuser';
import Header from './Header';
import Footer from './Footer';
import { Form, Input, InputNumber, Button } from 'antd';
import './contactform.css'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: ' Please enter a valid email',
      number: ' Invalid Number',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
 
const Contact = props => {
    
        const onFinish = values => {
          console.log(values);
        };
    return<div><Header /> <div className="contactform"><Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <div className="formdiv"> Please fill out the form below and we will be in touch shortly!</div> 
    <Form.Item name={['user', 'name']} style={{fontSize:"40px"}} label="Name" rules={[{ required: true, type: 'string' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true,type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Phone Number']} label="Phone Number" rules={[{ required: true, type: 'number'}]}>
      <InputNumber />
    </Form.Item>
   
     
     
    <Form.Item name={['user', 'message']} label="Message" rules={[{ required: true }]}>
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form></div>
  <Footer />
  </div>;
};

 

export default Contact;