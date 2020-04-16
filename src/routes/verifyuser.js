import axios from 'axios';
 const verifyuser= async( callback)=>{
     const usertype= localStorage.getItem('usertype');
     const token=localStorage.getItem('token')
     if(!token){
         callback({status:200,data:false})
     }
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/verifyuser'
    await axios.post(url, {usertype, token},config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {verifyuser};