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
    const { user, user: { avatar, gender, name: patientName } } = useContext(UserContext)

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
                user == null ?

                    <div className='flex gap-4 items-center'>
                        <Link to={'/login'} className='whitespace-nowrap bg-blue-600 text-white rounded-lg py-2 px-6 text-md capitalize hover:bg-opacity-80'>Login</Link>
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
                                    avatar == undefined ?
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



// // <div className='z-10 sticky top-0 flex items-center gap-12 w-full px-[5vw] py-5 h-[80px] border-b border-grey bg-white'>
// <div className='sticky top-0 left-0 z-50 bg-white w-full border-b-[1px] shadow-sm flex justify-between  py-3 px-4 md:px-10'>
// <div className='flex items-center'>
//     <div className='cursor-pointer text-blue-500 font-bold text-lg sm:text-[1.5rem] flex items-center gap-2'>
//         <img className='w-9 sm:w-12 h-auto' src={logo} alt="Logo" />
//         MEDAID
//     </div>
//     <ul className='ml-10 md:flex items-center gap-4 hidden'>
//         {menu.map((item, idx) => (

//             <NavLink key={idx} to={item && item.path} className={({ isActive }) => ` tracking-normal  text-md  hover:text-blue-600 text-md ${isActive ? "text-blue-600 font-bold" : "text-slate-800 font-medium"}`}>{item && item.name}</NavLink>
//         ))}
//     </ul>
// </div>

// <div className='flex items-center gap-3'>
//     {user==null ?
//         <Link
//             to={'/login'}
//             className='px-3 md:px-5 py-1 md:py-2 rounded-md bg-blue-600 mr-0 md:mr-4 text-white font-medium text-sm sm:text-md'
//         >
//             Login
//         </Link> :
//         <>
//             <h1 className='text-sm md:text-md font-medium'>patient</h1>

//             <div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full overflow-hidden bg-blue-600 border-2 border-blue-500'>

//                 <img className='w-8 h-8 md:w-10 md:h-10' src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />

//             </div>
//         </>
//     }


//     <motion.div onClick={() => setIsOpen(prev => !prev)} className=" ml-2 md:ml-4 cursor-pointer flex items-center md:hidden ">
//         {isOpen ? (
//             <motion.div
//                 key="close"
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: 90 }}
//                 exit={{ rotate: 0 }}
//                 transition={{ duration: 0.1 }}
//             >
//                 <RxCross1 className='text-2xl ' />
//             </motion.div>
//         ) : (
//             <motion.div
//                 key="menu"
//                 initial={{ rotate: 90 }}
//                 animate={{ rotate: 0 }}
//                 exit={{ rotate: 90 }}
//                 transition={{ duration: 0.1 }}
//             >
//                 <RiMenuFill className='text-2xl ' />
//                 {/* <Menu /> */}
//             </motion.div>
//         )}
//     </motion.div>
// </div>




// {isOpen &&
//     <motion.ul
//         className="absolute top-[3.8rem] sm:top-[4.4rem] -ml-4 md:hidden min-w-full bg-gray-800  bg-opacity-60 py-10 flex flex-col items-center gap-4"
//         initial={{ x: "-100%" }}
//         animate={{
//             x: 0, // Adjust x-position for sliding effect
//             transition: { duration: 0.2 }, // Adjust duration for animation speed
//         }}
//     >
//         {menu.map((item, idx) => (
//             <NavLink
//                 key={idx}
//                 to={item && item.path}
//                 className={({ isActive }) =>
//                     ` block  tracking-normal text-md hover:text-blue-600 text-md ${isActive ? 'text-blue-400 font-bold' : 'text-white font-medium'
//                     }`
//                 }
//             >
//                 {item && item.name}
//             </NavLink>
//         ))}
//     </motion.ul>}

// </div>