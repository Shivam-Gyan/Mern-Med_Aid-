import express from 'express'
import { adminRegister, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, registerDoc, registerUser } from '../controllers/user.controller.js';
import { isAdminAuthenticated,isPatientAuthenticated } from '../middleware/auth.js';

const userRouter=express.Router();

userRouter
.post('/register',registerUser)
.post("/login",login)
.post('/admin/register',isAdminAuthenticated,adminRegister)
.post("/doctor/register",isAdminAuthenticated,registerDoc)
.get('/doctors',getAllDoctors)
.get('/admin/details',isAdminAuthenticated,getUserDetails)
.get('/patient/details',isPatientAuthenticated,getUserDetails)
.get("/admin/logout",isAdminAuthenticated,logoutAdmin)
.get("/patient/logout",isPatientAuthenticated,logoutPatient)


export default userRouter;