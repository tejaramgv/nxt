import express from 'express';
import {registerController,loginController,testController} from "../controllers/authController.js";
import { requiresignIn,isAdmin } from '../middlewares/authMiddleware.js';
const router=express.Router()
//ROUTING
//test routes
router.get('/test',requiresignIn,isAdmin,testController);
//REGISTER
router.post('/register',registerController);
//LOGIN
router.post('/login',loginController);
//protected route auth
router.get('/user-auth',requiresignIn,(req,res)=>{
    res.status(200).send({ok:true});
});


export default router;