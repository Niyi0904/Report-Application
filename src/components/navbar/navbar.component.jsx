import './navbar.component.css';
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';


import { auth } from '../../firebase/firebase.utils';

import { UseStateContext } from '../../context/contextProvider';


const Navbar = () => { 
    const {currentUserProfile, setCurrentUserprofile} = UseStateContext(); 

    const signOut = () => {
        alert('Warning!! You are about to sign out')
        auth.signOut();
        setCurrentUserprofile(null);
    }
    return (
        <div className='px-2 w-full border-b-2 border-[#7E6227]'>
            <div className='flex justify-between'>
                <div className='navbar-header'>
                    Welcome {currentUserProfile.name}
                </div>
                <div className='flex navbar-icons space-x-11 xs:space-x-5 sm:space-x-5 top-2 relative w-[15%] xs:w-[30%] sm:w-[25%] text-end'>
                    <button className='relative bottom-1'>
                        <Link to={"/"}>
                            <FaHome />
                        </Link>
                    </button>

                    <button onClick={auth.signOut} className='relative bottom-1'>
                        <IoSettingsOutline />
                    </button>
                    
                    <button onClick={() => signOut() } className='relative bottom-1'>
                        <CgProfile />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;