import React,{useState} from 'react'
import Layout from '../../components/layout/layout.js'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import {useAuth} from '/home/rguktongole/Desktop/ReactProjects/my-first-app/src/context/auth.js';
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [auth,setAuth]=useAuth()
  const navigate=useNavigate()
  const location=useLocation()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    ;
    try { const res= await axios.post(`http://localhost:8093/api/v1/auth/login`,{email,password});
    if (res.data.success){
      navigate('/');
      
      toast.success(res.data.message);
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token, 
      });
      localStorage.setItem("auth",JSON.stringify(res.data)); 
      navigate(location.state || '/');
      }
    else{
      toast.error(res.data.message)
    }
} catch (error) {
      console.log(error);
      toast.error("Something went wrong!")
      
    }
    
  }
  return (
    <Layout>
      <>
        <br/>
        <br/>
        <br/>
        <br/>
    <div className="register">
        <h1>LOGIN FORM</h1>
       <form onSubmit={handleSubmit} className="shadow p-3 bg-light">
  <div className="mb-3">
    <input type="email" value={email}
    required
    onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3">
    
    <input type="password" value={password} required
    onChange={(e)=>{setPassword(e.target.value)}}className="form-control" placeholder="Enter Your Password" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-success button shadow-lg">LOGIN</button>
</form>

    </div>
        </>
    </Layout>
  )
}
export default Login
