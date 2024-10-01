

import mongoose ,{ Schema } from "mongoose";

const doctorSchema=new Schema({

    doctor_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
        maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    },
    doctor_specialitity: {
        type: String,
        required:true,
    },
    doctor_experience: {
        type: String,
        required:true,
    },
    doctor_fee: {
        type: Number,
        required:true,
    },
    doctor_degree: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    doctor_gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    role: {
        type: String,
        default:"Doctor"
    },
    doctor_pic:{
        type:String,
        required:true
    },
    doctor_address:{
        type:String,
        required:true
    },
    doctor_description:{
        type:String,
        required:true
    },
    available:{type:Boolean,required:true},
    doctor_rating:Number,
    date:{type:Number,required:true},
    slots_booked:{type:Object,default:{}}
    
},{minimize:false})


const doctorModel=mongoose.model('doctor',doctorSchema)

export default doctorModel;
