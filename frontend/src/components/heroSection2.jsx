import { Link } from "react-router-dom"

import appointment_img from '../Assets/appointment_img.png'

const AppointmentInfo = () => {


    return (
        <div className=" flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10" >

            <div className="flex flex-col gap-4 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 ">
                <p className="text-xl text-white md:text-3xl lg:text-5xl font-semibold">
                    Book Appointment <br />
                    With 100+ Trusted Doctors
                </p>
                <Link to={'/signup'} className="py-2 w-fit text-blue-600 text-sm md:text-md bg-white rounded-full px-6 hover:bg-white/50">Create Account <i className="fi fi-rr-user ml-2 text-sm"></i></Link>
            </div>

            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <img className="w-full aspect-auto absolute bottom-0 right-0 max-w-md" src={appointment_img} alt="" />
            </div>

        </div>
    )
}

export default AppointmentInfo;