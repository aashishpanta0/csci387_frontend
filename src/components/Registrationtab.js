import React, { useState, useEffect } from 'react';
import { courseroute } from '../routes/courseroute';
import { addcourse } from '../routes/addcourse';

import Registeredcourses from './Registeredcourses'
import Header from './Header';
import { Table, Tag } from 'antd';
import { Card } from 'antd';


const Registrationtab = props => {

    const [addcourses, setaddcourses] = useState([]);

    const [courses, setCourses] = useState(null);

    const register = () => {

        const coursevalues = {
            courseid: addcourses.map((eachCourse) => eachCourse.courseid),
            time: addcourses.map((eachCourse) => eachCourse.time),
            token: localStorage.getItem('token')
        }


        addcourse(coursevalues, (result) => {
            if (result.status === 200) {
                console.log(result.data)
                window.location.reload();

            }
        })


        window.alert('Your course has been registered if the time you selected is free in your schedule')

    }

    useEffect(() => {
        courseroute((result) => {
            if (result.status === 200) {
                setCourses(result.data)
            }

        })



    }, [])

    const data = [{

    }]
    const tabToload = props.display
    let tabledata = {}
    if (tabToload === "View All Courses") {
        return (<div>

            {courses === null ? null :

                
                    courses.map((eachCourse) => {
                        return (
                            <div style={{display:'flex', justifyContent:'center'}}>
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
                                        <button style={{ width: 'auto', height: 'auto', cursor: 'pointer', border: '1px solid green' }} onClick={() => {
                                            const index = addcourses.findIndex((course) => course.courseid === eachCourse.courseid)
                                            if (index === -1) {
                                                setaddcourses([...addcourses, eachCourse])
                                                alert('Course added to "My Favourites"');
                                            } else {
                                                alert("Course you are trying to add is already in 'My Favourites'.")
                                            }

                                        }}>Add to Favourites</button> </div>


                                {/* </Card> */}

                            </Card>
                            </div>
                            
                        )
                    })
                

            }


        </div>

        )
    }
    else if (tabToload === 'Add Courses') {
        return (<div >
            <table style={{ width: '80%', margin: 'auto', backgroundColor:'#f2efe6' }}>
                <tr>
                    <th>Course Name</th>
                    <th>Course Id</th>
                    <th>Credit Hours</th>
                    <th>Section</th>
                    <th>Time</th>
                     
                    
                    <th>Students Enrolled</th>
                    <th>Capacity</th>

                    <th>Professor</th>
                    <th>Action</th>
                </tr>
                {addcourses.map((course) => {
                    return (
                        <tr>
                            <td  >{course.course_name}</td>
                            <td  >{course.courseid}</td>
                            <td >{course.credithours}</td>
                            <td >{course.section}</td>
                            <td >{course.time}</td>
                             
                             
                            <td >{course.studentsenrolled}</td>
                            <td >{course.capacity}</td>
                            <td >{course.teacher}</td>
                            <button style={{ width: 'auto', height: 'auto' }} onClick={() => {
                                setaddcourses(addcourses.filter((eachCourse) => eachCourse.courseid !== course.courseid))
                            }}>Remove</button>

                        </tr>
                    )
                })}
            </table>
            <button onClick={() => { register() }} style={{ cursor: 'pointer', height: '40px', width: 'auto', backgroundColor: '#258013', display: 'flex', color: 'white', marginRight: '6%', marginTop: '5%', float: 'right', alignItems: 'center', justifyContent: 'center' }}>
                Click to Register
                </button>
        </div>)
    }
    else if (tabToload === 'My Courses') {
        return (<div>
            <Registeredcourses mycourses={courses} />



        </div>)
    }
    return (
        <div>
            No page
        </div>
    )


};



export default Registrationtab;