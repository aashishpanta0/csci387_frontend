import axios from 'axios';
 const adminremovecourse= async(formvalues, callback)=>{
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/admin/removecourses'
    await axios.post(url, formvalues,config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {adminremovecourse};