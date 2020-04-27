import React, { useState, useEffect } from 'react';
import { returncourses } from '../routes/returncourses';
import { removecourse } from '../routes/removecourse';
import {Card} from 'antd'


const Registeredcourses = props => {

    const [mycourses, setmycourses] = useState(null);


    useEffect(() => {
        const localtoken = { token: localStorage.getItem('token') }
        returncourses(localtoken, (result) => {

            setmycourses(result.data)

        })


    })

    return <div>
        {/* <table style={{ width: '90%', margin: 'auto' }}>
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

            </tr> */}

        {mycourses ? mycourses.map((myCoursesId) => {

            const courseInfo = props.mycourses.filter(eachCourse => eachCourse.courseid === myCoursesId.Courses_courseid)

            return (
                <div style={{display:'flex', justifyContent:'center', backgroundColor:'#f5ebe4'}}>
                {/* <tr> */}
                {/*     <td style={{border:'1px solid black'}}>{courseInfo[0].course_name}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].courseid}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].credithours}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].section}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].building}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].room}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].studentsenrolled}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].capacity}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].time}</td>
                //     <td style={{border:'1px solid black'}}>{courseInfo[0].teacher}</td>
                //     <td style={{border:'1px solid black'}}> 
            */}
                <Card type="inner"  title={courseInfo[0].course_name} style={{display:'inline-block', justifyContent:'left', alignItems:'left',width:'80%', marginTop: '5px', boxShadow: "1px 3px 1px #e4f59f"}} >
                    <p className="site-card-demo-inner-p"></p>

                     
                        <div style={{display:'flex', justifyContent:'space-evenly'}}>
                       Credit Hours: {courseInfo[0].credithours} <hr />
                         Building: {courseInfo[0].building} <hr />
                         Room: {courseInfo[0].room} </div>
                        <div style={{display:'flex', justifyContent:'space-evenly' }}>
                        Total Students Enrolled: {courseInfo[0].studentsenrolled} <hr />
                         Capacity: {courseInfo[0].capacity} <hr />
                         Time: {courseInfo[0].time} 
                        </div>
                        <div style={{display:'flex', float:'left'}}>Professor: {courseInfo[0].teacher}</div>
                        
                         <div style={{display:'flex', float:'right'}}><button style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer', marginTop:'10px' }} onClick={() => {
                    const deletecourseid = courseInfo[0].courseid;
                    console.log(deletecourseid)
                    const remove = () => {
                        const courseinfo = {
                            token: localStorage.getItem('token'),
                            courseid: deletecourseid,

                        }
                        removecourse(courseinfo, (result) => {
                            if (result.status === 200) {
                                console.log("Removed from schedule")
                                window.location.reload();
                            }
                        })
                        alert('Your course has been removed successfully')
                    }
                    remove();

                }}>Remove From Schedule</button> </div>


                {/* </Card> */}
                    
                </Card>
                {/* <button style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer' }} onClick={() => {
                    const deletecourseid = courseInfo[0].courseid;
                    console.log(deletecourseid)
                    const remove = () => {
                        const courseinfo = {
                            token: localStorage.getItem('token'),
                            courseid: deletecourseid,

                        }
                        removecourse(courseinfo, (result) => {
                            if (result.status === 200) {
                                console.log("Removed from schedule")
                                window.location.reload();
                            }
                        })
                        alert('Your course has been removed successfully')
                    }
                    remove();

                }}>Remove From Schedule</button> */}
                            


                    
                



                </div> )

        }

        ) :
            null




        }



        {/* </table> */}


        </div>;
};



export default Registeredcourses;