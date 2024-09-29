import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import messageRouter from './routes/message.route.js';
import { errorMiddleware } from './middleware/error.middleware.js';
import userRouter from './routes/user.router.js';
import appointmentRouter from './routes/appointment.router.js';
import { config } from 'dotenv';
config({ path: "./config/config.env" })

const app = express();

app.use(cors(
    {
        origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
        methods: ["PUT", "POST", "GET", "DELETE", "PATCH"],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/temp/'
}))


app.use('/api/v1/message', messageRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/appointment',appointmentRouter)
app.use(errorMiddleware)


export default app;