 import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModels.js";
import  JWT  from "jsonwebtoken";
import { comparePassword  } from "../helpers/authHelper.js";
export const registerController=async(req,res)=>{

    try {
        const {name,email,password,phone,address}=req.body
        if(!name){
            return res.send({message:"Name is Required"})
        }
        if(!email){
            return res.send({message:"Mail is Required"})
        }
        if(!password){
            return res.send({message:"Password is Required"})
        }
        if(!phone){
            return res.send({message:"phone no is Required"})
        }
        if(!address){
            return res.send({message:"Address is Required"})
        }
    //check user
    const existingUser=await userModel.findOne({email})
    if(existingUser){
        return res.status(200).send({
            success:false,
            message:'Already Registered with this email'
        })
    }
    //register user
    const hashedPassword=await hashPassword(password)
    //save
    const user=await new userModel({
        name,
        email,
        password,
        phone,
        address,
        password:hashedPassword

    }).save();
    res.status(201).send({
        success:true,
        message:'user registered successfully',
        user

    });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registraion',
            error
        })
    }
}
//POST LOGIN
export const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body
        //validation
        if(!email && !password){
            return res.status(404).send({
                success:false,
                message:"invalid email or password"
            })
        }
        //check user
        const user=await userModel.findOne({email})
        if(!user)
{
    return res.status(404).send({
        success:false,
        message:"Email is not registered"
    })
}
     //match
     const match=await comparePassword(password,user.password)
     if(!match){
        return res.status(200).send({
            success:false,
            message:'invalid password'

        })
     }
     //token
     const token= await JWT.sign({_id: user.id},process.env.JWT_SECRET,{
        expiresIn:"7d",
     });
     res.status(200).send({
        success:true,
        message:"login successfully",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address

        },
        token,

  
     });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in login',
            error

        })
        
    }

}
export const testController=(req,res)=>{
    res.send("protected ")

};