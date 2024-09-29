import React from 'react'
import { Link } from 'react-router-dom'

import groupdoc from '../Assets/groupdoctors.png'
import group_profiles from '../Assets/group_profiles.png'
import { toast } from 'react-hot-toast'

const HeroSection = () => {
    const handleClick = async () => {
        toast.success("Explore now button")
    }



    return (
        <section className=' bg-primary flex-wrap my-4 md:my-8 rounded-lg flex flex-col md:flex-row px-6 lg:px-20 md:px-10  ' >

            <div className='md:w-1/2  gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] flex flex-col items-start justify-center'>

                <p className='text-xl md:text-3xl lg:text-5xl font-bold text-white leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br />With Trusted Doctors
                </p>

                <div className='flex flex-col md:flex-row font-light gap-3 items-center'>
                    <img className=' aspect-auto h-12' src={group_profiles} alt="" />
                    <p className='text-sm text-white'>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>
                        schedule your appointment hassle-free.</p>
                </div>

                <button className='bg-white  text-black py-2 flex items-center gap-2 px-5 text-sm rounded-full'>Book Appointment <i className="fi fi-rr-arrow-up-right-from-square"></i></button>

            </div>

            <div className='md:w-1/2 pointer-events-none  relative'>

                <img  className=' pointer-events-none aspect-auto md:absolute bottom-0 rounded-lg w-full' src={groupdoc} alt="" />
            </div>


        </section>
    )
}

export default HeroSection

{/* <Link
onClick={handleClick}
className="mt-8 inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
>
Explore Now
</Link> */}