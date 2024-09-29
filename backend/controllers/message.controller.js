import { MessageModel } from "../models/message.model.js";
import AsyncErrorHandlder from "../middleware/AsyncErrorHandler.js";
import ErrorHandler from "../middleware/error.middleware.js";

export const sendMessage = AsyncErrorHandlder(async (req, res, next) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
        return next(new ErrorHandler("Please Fill Full Form!", 400));
    }

    await MessageModel.create({
        name, email, phone, message
    })

    res.status(200).json({
        success: true,
        message: "successfully sent"
    })
})


export const getAllMessage=AsyncErrorHandlder(async(req,res,next)=>{
    const message=await MessageModel.find({});

    res.status(200).json({
        success:true,
        message:"message fetched successfully",
        messages:message
    })
})