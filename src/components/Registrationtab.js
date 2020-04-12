import React, { useState, useEffect } from 'react';
import { courseroute } from '../routes/courseroute'
 
import { Table, Tag } from 'antd';

const Registrationtab = props => {
    const [courses,setCourses]=useState(null)
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
          dataIndex: 'coursename',
          key: 'coursename',
        },
        {
          title: 'Credit Hours',
          dataIndex: 'credit_hours',
          key: 'credit_hours',
        },  
        {title: 'Instructor',
        dataIndex: 'instructor',
        key: 'instructor',
    },
    {title: 'Capacity',
        dataIndex: 'capacity',
        key: 'capacity',
    }
    ]
        const data=[{
            
        }]
    const tabToload = props.display
    if (tabToload === "View All Courses") {
        return (<div>
            
            {courses===null?null:
                courses.map((eachCourse)=><h2>{eachCourse.course_name}  {eachCourse.courseid} 
                <button> Add</button> </h2>)
            }
             
        </div>

        )
    }
    else if (tabToload === 'Add Courses') {
        return (<div>Add Courses tab</div>)
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