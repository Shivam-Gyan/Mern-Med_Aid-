import express from 'express'
import { adminRegister, CloudinaryImageURl, getUserDetails, login, logoutAdmin, logoutPatient, registerUser } from '../controllers/user.controller.js';
import { isAdminAuthenticated,isPatientAuthenticated } from '../middleware/auth.js';

const userRouter=express.Router();

userRouter
.post('/register',registerUser)
.post("/login",login)
.post('/admin/register',isAdminAuthenticated,adminRegister)
// .post("/doctor/register",isAdminAuthenticated,registerDoc)
// .get('/doctors',getAllDoctors)
.get('/admin/details',isAdminAuthenticated,getUserDetails)
.get('/patient/details',isPatientAuthenticated,getUserDetails)
.get("/admin/logout",isAdminAuthenticated,logoutAdmin)
.get("/patient/logout",isPatientAuthenticated,logoutPatient)
.post('/upload-image',CloudinaryImageURl)


export default userRouter;