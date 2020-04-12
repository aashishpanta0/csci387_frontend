import React, { useState, useEffect } from 'react';
import { courseroute } from '../routes/courseroute'

import { Table, Tag } from 'antd';


const Registrationtab = props => {

    const [addcourses, setaddcourses]=useState([]);
    
    const [courses, setCourses] = useState(null)
    useEffect(() => {
        courseroute((result) => {
            if (result.status === 200) {
                console.log(result.data)
                setCourses(result.data)
            }

        })


    }, [])
    const columns = [
        {
            title: 'Course Id',
            dataIndex: 'courseid',
            key: 'courseid',
            //   render: text => <a>{text}</a>,
        },
        {
            title: 'Course Name',
            dataIndex: 'course_name',
            key: 'course_name',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Section',
            dataIndex: 'section',
            key: 'tsection',
        },
        {
            title: 'Room',
            dataIndex: 'room',
            key: 'room',
        },
        {
            title: 'Teacher',
            dataIndex: 'teacher',
            key: 'teacher',
        }, {
            title: 'building',
            dataIndex: 'building',
            key: 'building',
        },
        {
            title: 'Credit Hours',
            dataIndex: 'credithours',
            key: 'credithours',
        }, {
            title: 'Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
        }
    ]
    const data = [{

    }]
    const tabToload = props.display
    let tabledata = {}
    if (tabToload === "View All Courses") {
        return (<div>

            {courses === null ? null :
                <table style={{width:'90%',margin:'auto'}}>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Id</th>
                        <th>Credit Hours</th>
                        <th>Section</th>
                        <th>Building</th>
                        <th>Room</th>
                        <th>Students Enrolled</th>
                        <th>Capacity</th>
                        
                        <th>Professor</th>
                        <th>Action</th>
                    </tr>
                    {courses.map((eachCourse) => {
                        return (
                            <tr>
                                <td>{eachCourse.course_name}</td>
                                <td>{eachCourse.courseid}</td>
                                <td>{eachCourse.credithours}</td>
                                <td>{eachCourse.section}</td>
                                <td>{eachCourse.building}</td>
                                <td>{eachCourse.room}</td>
                                <td>{eachCourse.studentsenrolled}</td>
                                <td>{eachCourse.capacity}</td>
                                <td>{eachCourse.teacher}</td>
                                <button style={{width:'auto', height:'auto'}} onClick={()=>{
                                    const index=addcourses.findIndex((course)=>course.courseid===eachCourse.courseid)
                                    if(index===-1){
                                        setaddcourses([...addcourses, eachCourse])
                                    }else{
                                        alert("Course already in cart.")
                                    }

                                }}>Add</button>

                            </tr>
                        )
                    })}
                </table>
            }}

        </div>

        )
    }
    else if (tabToload === 'Add Courses') {
    return (<div>
                       <table style={{width:'90%',margin:'auto'}}>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Id</th>
                        <th>Credit Hours</th>
                        <th>Section</th>
                        <th>Building</th>
                        <th>Room</th>
                        <th>Students Enrolled</th>
                        <th>Capacity</th>
                        
                        <th>Professor</th>
                        <th>Action</th>
                    </tr>
                    {addcourses.map((course) => {
                        return (
                            <tr>
                                <td>{course.course_name}</td>
                                <td>{course.courseid}</td>
                                <td>{course.credithours}</td>
                                <td>{course.section}</td>
                                <td>{course.building}</td>
                                <td>{course.room}</td>
                                <td>{course.studentsenrolled}</td>
                                <td>{course.capacity}</td>
                                <td>{course.teacher}</td>
                                <button style={{width:'auto', height:'auto'}}  onClick={()=>{
                                    setaddcourses( addcourses.filter((eachCourse)=>eachCourse.courseid!==course.courseid))
                                }}>Remove</button>

                            </tr>
                        )
                    })}
                </table>
        </div>)
    }
    else if (tabToload === 'My Courses') {
        return (<div>This is my courses tab</div>)
    }
    return (
        <div>
            No page
        </div>
    )


};



export default Registrationtab;