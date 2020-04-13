import React, { useState, useEffect } from 'react';
import { returncourses } from '../routes/returncourses';

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

                <th>Professor</th>

            </tr>

            {mycourses ? mycourses.map((myCoursesId) => {

                const courseInfo = props.mycourses.filter(eachCourse => eachCourse.courseid === myCoursesId.Courses_courseid)

                return (
                    <tr>
                        <td>{courseInfo[0].course_name}</td>
                        <td>{courseInfo[0].courseid}</td>
                        <td>{courseInfo[0].credithours}</td>
                        <td>{courseInfo[0].section}</td>
                        <td>{courseInfo[0].building}</td>
                        <td>{courseInfo[0].room}</td>
                        <td>{courseInfo[0].studentsenrolled}</td>
                        <td>{courseInfo[0].capacity}</td>
                        <td>{courseInfo[0].teacher}</td>


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