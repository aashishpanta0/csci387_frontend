import axios from 'axios';
 const returncourses= async( studenttoken, callback)=>{
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/mycourses'
    await axios.post(url,studenttoken,config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {returncourses};