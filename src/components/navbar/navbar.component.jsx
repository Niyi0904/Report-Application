import './navbar.component.css';
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

import { auth } from '../../firebase/firebase.utils';

import { UseStateContext } from '../../context/contextProvider';


const Navbar = () => {
    const consoles = () => console.log('niyi');
    const {currentUserProfile} = UseStateContext();
    return (
        <div className='mt-2 mx-2 border-b-2 border-[#7E6227]'>
            <div className='flex justify-between'>
                <div className='navbar-header'>
                    Welcome {currentUserProfile.name}
                </div>
                <div className='flex navbar-icons space-x-11 top-2 relative w-[15%] text-end'>
                    <FaHome />
                    <IoSettingsOutline />
                    <button onClick={auth.signOut}>
                        <CgProfile />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;