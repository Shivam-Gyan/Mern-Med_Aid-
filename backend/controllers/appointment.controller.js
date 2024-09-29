import AsyncErrorHandlder from "../middleware/AsyncErrorHandler.js";
import apppointmentModel from "../models/appointment.model.js";
import ErrorHandler from "../middleware/error.middleware.js";
import { userModel } from "../models/user.model.js";


export const bookAppointment = AsyncErrorHandlder(async (req, res, next) => {
    const {
        name,
        email,
        phone,
        appointmentdate,
        gender,
        department,
        doctorname,
        // doctorId,    
        // patientId,
        isVisited,
        address,
    } = req.body

    if (!name ||
        !email ||
        !phone ||
        !appointmentdate ||
        !gender ||
        !department ||
        !doctorname ||
        // !doctorId ||
        // !patientId ||
        !isVisited||
        !address
    ) {
        return next(new ErrorHandler("please Fill the form !", 400));
    }

    const isConflict=await userModel.find({
        name:doctorname,
        role:"Doctor",
        doctorDep:department
    })

    if(isConflict.length===0){
        return next(new ErrorHandler("Doctor not found",400))

    }

    if(isConflict.length >1){
        return next(new ErrorHandler("Doctor conflict occure",400))
    }
    const doctorId=isConflict[0]._id;

    const appointmentSchedule=await apppointmentModel.create({
        name,
        email,
        phone,
        appointmentdate,
        gender,
        department,
        doctorname,
        doctorId,    
        // patientId,
        isVisited,
        address,
    })

    await appointmentSchedule.populate("doctorId")

    res.status(200).json({
        success:true,
        message:"appointment book successfull",
        appointmentSchedule
    })


})


export const getAllAppointment=AsyncErrorHandlder(async(req,res,next)=>{
    const allAppointment=await apppointmentModel.find({});

    res.status(200).json({
        success:true,
        message:"Fetchde successfully ",
        allAppointment
    })
})

export const updateStatus=AsyncErrorHandlder(async(req,res,next)=>{
    const {id}=req.params;

    let appointment=await apppointmentModel.findById(id)
    if(!appointment){
        return next(new ErrorHandler("Appointment not found",404))
    }

    appointment=await apppointmentModel.findByIdAndUpdate(id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        message:"status updated",
        appointment
    })
})
export const deleteAppointment=AsyncErrorHandlder(async(req,res,next)=>{
    const {id}=req.params;

    let appointment=await apppointmentModel.findById(id)
    if(!appointment){
        return next(new ErrorHandler("Appointment not found",404))
    }

    appointment=await apppointmentModel.findByIdAndDelete(id,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        message:"Appointment deleted !",
        appointment
    })
})