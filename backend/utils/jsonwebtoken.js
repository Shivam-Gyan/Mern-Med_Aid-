export const generateToken = (user, message, success, statuscode, res) => {
    const token = user.generateJsonWebToken();
    
    const cookieName = user.role == "Admin" ? "adminToken" : "patientToken";

    res.cookie(cookieName, token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        httpOnly: true
    })
        .status(statuscode)
        .json({
            success: success,
            message: message,
            user
        })
}