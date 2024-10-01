import mongoose from "mongoose";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
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
    dob: {
        type: Date,
    },
    password: {
        type: String,
        required: true,
        minLength: [7, "Password must contains 8 Characters"],
        select: false
    },
    gender:{
        type:String,
        enum:["Male","Female"]
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient"]
    },
    avatar: String
});


userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword=async function(enterPass){
    return await bcrypt.compare(enterPass,this.password)
}

userSchema.methods.generateJsonWebToken= function(){
    return jwt.sign({_id:this._id,email:this.email},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    })
}

export const userModel = mongoose.model("users", userSchema);