import { userModel } from "../models/user.model.js";
import AsyncErrorHandlder from "../middleware/AsyncErrorHandler.js";
import ErrorHandler from "../middleware/error.middleware.js";
import { generateToken } from "../utils/jsonwebtoken.js";
import cloudinary from 'cloudinary'



export const registerUser = AsyncErrorHandlder(async (req, res, next) => {
    const { name, email, phone, password, role, gender } = req.body;

    if (!name || !email || !phone || !password || !role || !gender) {
        return next(new ErrorHandler("please fill full form", 400))
    }
    let user = await userModel.findOne({ email })
    if (user) {
        return next(new ErrorHandler("user already register", 400))
    }

    user = await userModel.create({
        name, email, password, phone, role, gender
    })

    // this function used to create a jwt token and send response 
    generateToken(user, "user registered successfully", true, 200, res)


})

export const login = AsyncErrorHandlder(async (req, res, next) => {

    const { email, confirmPassword, password, role } = req.body;
    

    if (!email  || !password || !role) {
        return next(new ErrorHandler("please fill full form !", 400))
    }

    // if (password !== confirmPassword) {
    //     return next(new ErrorHandler("password and confirm password not match", 400))
    // }


    let user = await userModel.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid credentials", 404))
    }


    const isPasswordMatch = await user.comparePassword(password)

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid credentials", 404))
    }
    if (role !== user.role) {
        return next(new ErrorHandler(`${role} not found`, 404))

    }

    // this function used to create a jwt token and send response 
    generateToken(user, "user Logged In successfully", true, 200, res)


})


export const adminRegister = AsyncErrorHandlder(async (req, res, next) => {
    const { name, email, phone, password, gender } = req.body;

    if (!name || !email || !phone || !password || !gender) {
        return next(new ErrorHandler("please fill full form", 400))
    }

    const isRegister = await userModel.findOne({ email });

    if (isRegister) {
        return next(new ErrorHandler("Admin already exist", 400))
    }

    const admin = await userModel.create({ name, email, phone, password, gender, role: "Admin" })

    generateToken(admin, "Admin registered succesfully !", true, 200, res)


})


export const getAllDoctors = AsyncErrorHandlder(async (req, res, next) => {
    const doctors = await userModel.find({ role: "Doctor" })

    res.status(200).json({
        sucess: true,
        message: "fetched successfully",
        doctors
    })
})

export const getUserDetails = AsyncErrorHandlder(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "Fetched details successfully",
        user
    })
})

export const logoutAdmin = AsyncErrorHandlder(async (req, res, next) => {
    res
        .status(200)
        .cookie("adminToken", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        }).json({
            success: true,
            message: "Admin log Out successfully !"
        })
})

export const logoutPatient = AsyncErrorHandlder(async (req, res, next) => {
    res
        .status(200)
        .cookie("patientToken", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        }).json({
            success: true,
            message: "Patient log Out successfully !"
        })
})


export const registerDoc = AsyncErrorHandlder(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length == 0) {
        return next(new ErrorHandler("doctor avatar is Required", 400));
    }
    const { avatar } = req.files;

    console.log(avatar)
    const allowedFormat = ["image/png", "image/jpeg", "image/webp"]
    console.log(avatar)
    if (!allowedFormat.includes(avatar.mimetype)) {
        return next(new ErrorHandler("Image format not supported", 400))
    }

    const { name, email, phone, password, gender, doctorDep } = req.body;

    if (!name || !email || !phone || !password ||!gender || !doctorDep) {
        return next(new ErrorHandler("please fill full form", 400))
    }
    const isRegistered = await userModel.findOne({ email })
    if (isRegistered) {
        return next(new ErrorHandler(`user already registed as ${isRegistered.role}`, 400))
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(
        avatar.tempFilePath
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error("Cloudinary Error :: ", cloudinaryResponse.error || "Unknown cludinary error")
    }

    const doctor=await userModel.create({
        name, email, phone, password,role:"Doctor" ,gender, doctorDep,avatar:{
            public_id:cloudinaryResponse.public_id,
            url:cloudinaryResponse.secure_url
        }
    })

    res.status(200).json({
        success:true,
        message:"new doctor registered",
        doctor
    })



})