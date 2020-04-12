import axios from 'axios';
 const verifyuser= async( callback)=>{
     const token=localStorage.getItem('token')
     if(!token){
         callback(false)
     }
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/verifyuser'
    await axios.post(url, {token},config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {verifyuser};