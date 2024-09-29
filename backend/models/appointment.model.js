import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
        maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    },
    appointmentdate: {
        type: Date,
    },
    gender:{
        type:String,
        enum:["Male","Female"]
    },
    department:{
        type:String,
        required:true,
    },
    doctorname:{
        type:String,
        required:true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    isVisited:{
        type:Boolean
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending"
    }

})


const apppointmentModel=mongoose.model('appointments',appointmentSchema)

export default apppointmentModel;