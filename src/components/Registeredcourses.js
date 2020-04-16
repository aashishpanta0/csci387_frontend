import React, { useState, useEffect } from 'react';
import { returncourses } from '../routes/returncourses';
import {  removecourse} from '../routes/removecourse';


const Registeredcourses = props => {

    const [mycourses, setmycourses] = useState(null);
     

    useEffect(() => {
        const localtoken = { token: localStorage.getItem('token') }
        returncourses(localtoken, (result) => {

            setmycourses(result.data)

        })

        
    })

    return <div>
        <table style={{ width: '90%', margin: 'auto' }}>
            <tr>
                <th>Course Name</th>
                <th>Course Id</th>
                <th>Credit Hours</th>
                <th>Section</th>
                <th>Building</th>
                <th>Room</th>
                <th>Students Enrolled</th>
                <th>Capacity</th>
                <th>Time</th>

                <th>Professor</th>
                <th> Action</th>

            </tr>

            {mycourses ? mycourses.map((myCoursesId) => {

                const courseInfo = props.mycourses.filter(eachCourse => eachCourse.courseid === myCoursesId.Courses_courseid)

                return (
                    <tr>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].course_name}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].courseid}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].credithours}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].section}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].building}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].room}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].studentsenrolled}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].capacity}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].time}</td>
                        <td style={{border:'1px solid black'}}>{courseInfo[0].teacher}</td>
                        <td style={{border:'1px solid black'}}> 
                        <button style={{backgroundColor:'red', color:'white', cursor:'pointer'}} onClick={()=>{ 
                            const deletecourseid = courseInfo[0].courseid;
                            console.log(deletecourseid)
                            const remove=()=>{
                                const courseinfo={
                                    token: localStorage.getItem('token'),
                                    courseid: deletecourseid,
                                    
                                }
                                removecourse(courseinfo, (result)=>{
                                    if(result.status===200){
                                        console.log("Removed from schedule")
                                    }
                                })
                                alert('Your course has been removed successfully')
                            }
                            remove();
                            
                            }}>Remove From Schedule</button></td>


                    </tr>
                )





            }

            ) :
                null




            }



        </table>


    </div>;
};



export default Registeredcourses;