import React, { useState } from 'react'
import heart from '../Assets/cardiology.png'
import otology from '../Assets/listen.png'
import neurologist from '../Assets/neurologist.png'
import dentist from '../Assets/tooth.png'
import general from '../Assets/doctor.png'
import orthopedics from '../Assets/orthopedics.png'



const SearchDoctor = () => {

    const [doctor, setDoctor] = useState("");


    const handleFormSubmit = () => {
        console.log(doctor)
    }

    const handleIconClick = (e) => {
        console.log(e.currentTarget.querySelector("h4").textContent)
    }


    const department = [
        {
            name: "Caridologist",
            icon: heart
        },
        {
            name: "Neurologist",
            icon: neurologist
        },
        {
            name: "General Doctor",
            icon: general
        },
        {
            name: "Orthopedic",
            icon: orthopedics
        },
        {
            name: "Otology",
            icon: otology
        },
        {
            name: "Dentist",
            icon: dentist
        }
    ]

    return (
        <div className='mt-12 border-y-[1px] border-gray-100 py-10 '>
            <h1 className='text-2xl  text-center tetx-slate-700 md:text-3xl tracking-wide font-bold'>Search <span className=' text-blue-700  '>Doctors</span></h1>
            <p className='text-xs md:text-md font-medium text-gray-500 tracking-normal text-center '>Search Your Doctor and Book Appointment in one click</p>

            {/* search bar */}
            <div className='flex justify-center my-8 items-center gap-4'>
                <input
                    className='rounded-md outline-blue-600 placeholder:text-sm px-3 py-1 border-[1px] border-gray-300 text-slate-800 '
                    type="text"
                    placeholder='search . . . '
                    value={doctor}

                    // on enter submit code
                    onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                            return handleFormSubmit()
                        }
                    }}
                    onChange={(e) => setDoctor(e.target.value)}
                />
                <button
                    className='px-3 py-[0.45rem] flex gap-2 rounded-md text-white text-md bg-blue-700 hover:bg-blue-600 font-medium items-center '
                    // onclick submit code
                    onClick={handleFormSubmit}>
                    <i className="fi fi-rr-search h-5 w-5 text-white"></i>
                </button>
            </div>

            {/* doctor department wise category */}
            <div className='flex sm:justify-center overflow-x-scroll items-center py-2' style={{scrollbarWidth:"none",}} >
                {department && department.map((item, idx) => (

                    <div
                        key={idx}
                        onClick={handleIconClick}
                        className={` ${idx==0?"max-sm:ml-3":idx==5?"max-sm:mr-2":""} mx-2 w-24 sm:28 flex flex-col flex-shrink-0 gap-2 items-center rounded-md cursor-pointer text-center`}
                    >
                        <div className='flex p-3 rounded-full bg-blue-100' ><img src={item && item.icon} alt={item && item.name} /></div>
                        <h4 className='text-xs font-medium text-blue-800'>{item && item.name}</h4>
                    </div>
                ))}
            </div>
           


        </div>
    )
}

export default SearchDoctor