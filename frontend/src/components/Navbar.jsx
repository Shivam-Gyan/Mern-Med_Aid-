import React, { useContext, useEffect, useState } from 'react'
import logo from '../Assets/download.png'
import { Link, NavLink } from 'react-router-dom'
import boyimg from '../Assets/boyimg.jpeg'
import girlimg from '../Assets/girlimg.jpeg'
import { UserContext } from '../App';
import UserNavigationPanel from './user.navigation.panel'

export const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "All doctors",
        path: '/all-doctors'
    },
    {
        name: "Explore",
        path: '/explore'
    },
    {
        name: "Contact Us",
        path: '/contact-us'
    },

]

const Navbar = () => {
    const [showPanel, setShowPanel] = useState(false)
    const { user, user: { email,avatar, gender, name: patientName } } = useContext(UserContext)

    

    return (
        <div className='z-10 sticky top-0 flex items-center justify-between gap-12 w-full px-[5vw] py-5 h-[80px] border-b border-grey bg-white'>
            <div>
                <div className='flex items-center ml-4 lg:ml-12'>
                    <img src={logo} alt="" className=' h-12 w-12' />
                    <p className='text-2xl font-bold block'>Med <span className='text-blue-600'>Aid</span></p>
                </div>
            </div>

            <div className=' max-[860px]:hidden'>
                <ul className='flex justify-center items-center gap-4 '>
                    {
                        menu.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <NavLink className={({ isActive }) => `capitalize text-md font-medium ${isActive ? "text-blue-600" : ""}`} to={item.path}>{item.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {
                email==null  ?

                    <div className='flex gap-4 items-center'>
                        <Link to={'/signin'} className='whitespace-nowrap bg-blue-600 text-white rounded-lg py-2 px-6 text-md capitalize hover:bg-opacity-80'>Login</Link>
                        <Link to={'/signup'} className='whitespace-nowrap font-medium max-md:hidden bg-gray-300 rounded-lg py-2 px-6 text-md capitalize hover:bg-opacity-80'>sign up</Link>
                    </div> :

                    <div className='flex items-center gap-2'>
                        <button className=' w-10 h-10 rounded-full bg-gray-100 relative hover:bg-black/10'>
                            <i className='fi fi-rr-bell text-xl block mt-1'></i>
                            <span className='absolute w-[10px] h-[10px] bg-red-400 rounded-full top-2 right-2'></span>
                            {/* {new_notification ? <span className='absolute w-[10px] h-[10px] bg-red rounded-full top-2 right-2'></span> : ""} */}
                        </button>

                        <div
                            onClick={() => setShowPanel(prev => !prev)}
                            onBlur={() => {
                                setTimeout(() => {
                                    setShowPanel(false)
                                }, 200)
                            }}
                        >
                            <button className='relative overflow-hidden h-10 w-10 bg-gray-300  rounded-full cursor-pointer'>
                                {
                                    !avatar ?
                                        <img src={gender == "Male" ? boyimg : girlimg} alt="" /> :
                                        <img src={avatar} alt="" />
                                }
                            </button>

                            {
                                showPanel ? <UserNavigationPanel /> : ""
                            }
                        </div>


                    </div>

            }

        </div>
    )
}

export default Navbar