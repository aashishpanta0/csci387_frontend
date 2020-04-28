import React, { useState, useEffect } from 'react';
import Footer from './Footer'
import Header from './Header'
import { Form, Input, InputNumber, Button } from 'antd';
import { adminregistercourse } from '../routes/adminregistercourse'
import { Menu } from 'antd';
import {
    FolderViewOutlined,
    AppstoreAddOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { courseroute } from '../routes/courseroute';
import { Card } from 'antd';
import {adminremovecourse} from '../routes/adminremovecourse'
 



const Adminregistration = props => {
    const [viewtab, setviewtab] = useState('View All Courses')
    const [courses, setCourses] = useState(null)
    // const [courseid, setcourseid] = useState();
    // const [coursename, setcoursename] = useState();
    // const [time, settime] = useState();
    // const [section, setsection] = useState();
    // const [room, setroom] = useState();
    // const [teacher, setteacher] = useState();
    // const [building, setbuilding] = useState();
    // const [credithours, setcredithours] = useState();
    // const [capacity, setcapacity] = useState();
    useEffect(() => {
        courseroute((result) => {
            if (result.status === 200) {
                setCourses(result.data)
            }

        })



    }, [])
    

    const removeadmincourse=( eachCourse )=>{
        const values={
            course: eachCourse.courseid}
        adminremovecourse(values, (result)=>{
            if(result.status==200){
                alert('The course you selected is successfully removed from the database')
                window.location.reload()
            }
        })
    }


    const submitcourse = (formvalues) => {



        adminregistercourse(formvalues, (result) => {
            console.log("Submit Course Working")
            if (result.status === 200) {
                console.log(result)

                alert('Your course has been registered to the database.')
                window.location.reload();
            }
        })


    }





    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    if (viewtab === 'Register Courses') {
        return <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}><div style={{ flexGrow: 1 }}><Header />
            <Menu mode="horizontal">
                <Menu.Item key="mail" onClick={() => {
                    setviewtab('View All Courses');

                }}>
                    <FolderViewOutlined />
          View All Courses
        </Menu.Item>


                <Menu.Item key="alipay" onClick={() => { setviewtab('Register Courses') }}>

                    <SettingOutlined />
              Register Courses

        </Menu.Item>



            </Menu>
            <div>

                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', fontFamily: 'bold' }}>Please register the courses below:</div>

                <Form {...layout} name="nest-messages" validateMessages={validateMessages} onFinish={submitcourse}>
                    <Form.Item

                        name="courseid"
                        label="Course ID"

                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="eg: csci387sec1" />
                    </Form.Item>
                    <Form.Item
                        name="coursename"

                        label="Course Name"
                        rules={[
                            {
                                required: 'true'
                            },
                        ]}
                    >
                        <Input placeholder=' Software Design and Development' />
                    </Form.Item>
                    <Form.Item
                        name="time"
                        label="Time"
                        rules={[
                            {
                                required: true,

                            }
                        ]}
                    >
                        <Input placeholder="eg: MWF 10:00AM - 11:00AM or  TTH 10:00AM - 11:00AM" />
                    </Form.Item>
                    <Form.Item
                        name="section"
                        label="Section">
                        <InputNumber placeholder="eg: 1" />
                    </Form.Item>
                    <Form.Item
                        name="room"
                        rules={[
                            {
                                required: true,

                            }
                        ]} label="Room Number">
                        <Input placeholder='A101' />
                    </Form.Item>
                    <Form.Item
                        name="teacher"
                        rules={[
                            {
                                required: true,

                            }
                        ]} label="Teacher">
                        <Input placeholder='Timothy Holston' />
                    </Form.Item>
                    <Form.Item
                        name="building"
                        rules={[
                            {
                                required: true,

                            }
                        ]} label="Building">
                        <Input placeholder='Weir Hall' />
                    </Form.Item>
                    <Form.Item
                        name="credithours"
                        rules={[
                            {
                                required: true,

                            }
                        ]} label="Credit Hours">
                        <InputNumber placeholder='eg: 3' />
                    </Form.Item>
                    <Form.Item
                        name="capacity"
                        rules={[{ required: true }]}
                        label="Capacity">
                        <InputNumber placeholder='eg: 30' />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Form.Item>
                </Form>
            </div>









        </div>

            <Footer /></div>
    }
    else 
    if(viewtab==='View All Courses'){
        return <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}><div style={{ flexGrow: 1 }}><Header />
            <Menu mode="horizontal">
                <Menu.Item key="mail" onClick={() => {
                    setviewtab('View All Courses');

                }}>
                    <FolderViewOutlined />
          View All Courses
        </Menu.Item>


                <Menu.Item key="alipay" onClick={() => { setviewtab('Register Courses') }}>

                    <SettingOutlined />
              Register Courses

        </Menu.Item>



            </Menu>
            <div>

            {courses === null ? null :


                courses.map((eachCourse) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f5ebe4' }}>
                            <Card title={eachCourse.course_name} type="inner" style={{ display: 'inline-block', justifyContent: 'left', alignItems: 'left', width: '80%', marginTop: '5px', boxShadow: "1px 3px 1px #e4f59f" }} >
                                <p className="site-card-demo-inner-p"></p>

                                {/* <Card type="inner" title={eachCourse.course_name} > */}
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    Credit Hours: {eachCourse.credithours} <hr />
                         Building: {eachCourse.building} <hr />
                         Room: {eachCourse.room} </div>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    Total Students Enrolled: {eachCourse.studentsenrolled} <hr />
                         Capacity: {eachCourse.capacity} <hr />
                         Time: {eachCourse.time}
                                </div>
                                <div style={{ display: 'flex', float: 'left' }}>Professor: {eachCourse.teacher}</div>

                                <div style={{ display: 'flex', float: 'right' }}>
                                    <button style={{ width: 'auto', height: 'auto', cursor: 'pointer', border: '1px solid ', color:'white', backgroundColor:'red' }} onClick={()=>removeadmincourse(eachCourse)
                                    } >Delete from Record</button> </div>


                                {/* </Card> */}

                            </Card>
                        </div>

                    )
                })


            }


        </div>
            
            
            </div>
            <Footer />
            
            </div>



    };
    };



    export default Adminregistration;