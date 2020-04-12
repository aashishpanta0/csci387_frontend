import axios from 'axios';
 const courseroute= async( callback)=>{
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/student/getcourses'
    await axios.post(url,config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {courseroute};