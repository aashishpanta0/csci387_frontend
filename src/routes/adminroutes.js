import axios from 'axios';
 const createuser= async(formvalues, callback)=>{
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/admin/create'
    await axios.post(url, formvalues,config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {createuser};