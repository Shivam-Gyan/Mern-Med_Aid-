import jwt from "jsonwebtoken";
import AsyncErrorHandlder from "./AsyncErrorHandler.js";
import ErrorHandler from "./error.middleware.js";
import { userModel } from "../models/user.model.js";

export const isAdminAuthenticated=AsyncErrorHandlder(async(req,res,next)=>{
    const token=req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Admin not authenticated",400))
    }

    const decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user=await userModel.findOne({_id:decode._id}) 

    if(req.user.role!=="Admin"){
        return next(new ErrorHandler(`${req.user.role} is not authorized for resource`,403))
    }

    next();
})


export const isPatientAuthenticated=AsyncErrorHandlder(async(req,res,next)=>{
    const token=req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("Patient not authenticated",400))
    }

    const decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user=await userModel.findOne({_id:decode._id}).select('name gender email avatar role _id phone')

    if(req.user.role!=="Patient"){
        return next(new ErrorHandler(`${req.user.role} is not authorized for resource`,403))
    }

    next();


})