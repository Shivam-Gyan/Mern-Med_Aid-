import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import { toast } from 'react-hot-toast'
import AnimationWrapper from "./AnimationWrapper";
import { menu } from "./Navbar";



const UserNavigationPanel = () => {

    const { user: { _id, name } } = useContext(UserContext)


    const signOutUser = () => {
        toast.success("logout successfully")
    }

    return (
        <AnimationWrapper
            className="absolute right-0 z-50"
            transition={{ duration: 0.2 }}
        >

            <div className="bg-white absolute right-0  border border-grey w-60 overflow-hidden duration-200">

                <div className="flex flex-col">
                    <Link to={`/patient/${_id}`} className="link pl-8 ">
                        Profile
                    </Link>

                    <Link to={`/settings/edit-profile`} className="link pl-8 ">
                        Setting
                    </Link>
                    <div className='flex flex-col min-[861px]:hidden'>
                    {
                        menu.map((item, idx) => {
                            return (
                                    <NavLink key={idx} className={({ isActive }) => `capitalize link pl-8 ${isActive ? "text-black bg-gray-300" : ""}`} to={item.path}>{item.name}</NavLink>
                                
                            )
                        })
                    }
                </div>
                </div>

                <span className="absolute border-t border-grey w-[100%]">
                </span>

                <button
                    onClick={signOutUser}
                    className="text-left  p-4 hover:bg-grey w-full pl-8 py-4  "
                >
                    <h1 className=" font-bold text-lg mb-1 ">Sign Out</h1>
                    <p className="text-dark-grey">@{name}</p>
                </button>

            </div>
        </AnimationWrapper>
    )
}

export default UserNavigationPanel;