import React,{useState} from 'react'
import Layout from '../../components/layout/layout.js'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    ;
    try { const res= await axios.post(`http://localhost:8093/api/v1/auth/register`,{name,email,password,phone,address});
    if (res.data.success){
      // navigate('/login');
      
      toast.success(res.data.message);
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
      <> <br/>
        <br/>
        <br/>
        <br/>
    <div className="register">
        <h1>REGISTER</h1>
       <form onSubmit={handleSubmit} className="shadow p-3 bg-light">
  <div className="mb-3">
  <div className="mb-3">
    
    <input type="text" value={name} 
    onChange={(e)=>{setName(e.target.value)}}
    required
    className="form-control" id="exampleInputPassword1" placeholder="Enter your Name"/>
  </div>
    
    <input type="email" value={email}
    required
    onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3">
    
    <input type="password" value={password} required
    onChange={(e)=>{setPassword(e.target.value)}}className="form-control" placeholder="Enter Your Password" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    
    <input type="number" value={phone}required
    onChange={(e)=>{setPhone(e.target.value)}} className="form-control" placeholder="Enter your phone no" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    
    <input type="text" value={address} required 
    onChange={(e)=>{setAddress(e.target.value)}} className="form-control" placeholder="Enter Your Address " id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-success button shadow-lg">SIGN UP</button>
</form>

    </div>
        </>
    </Layout>
  )
}

export default Register
