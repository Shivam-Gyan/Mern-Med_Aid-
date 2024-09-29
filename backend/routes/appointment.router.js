import express from 'express'
import { bookAppointment, deleteAppointment, getAllAppointment, updateStatus } from '../controllers/appointment.controller.js';
import {isPatientAuthenticated,isAdminAuthenticated} from '../middleware/auth.js'

const appointmentRouter=express.Router();


appointmentRouter
// .post('/book',isPatientAuthenticated,bookAppointment)
.post('/book',bookAppointment)
.get('/get-appointment',isAdminAuthenticated,getAllAppointment)
.patch('/update-status/:id',isAdminAuthenticated,updateStatus)
.delete('/delete-appointment/:id',isAdminAuthenticated,deleteAppointment)


export default appointmentRouter;