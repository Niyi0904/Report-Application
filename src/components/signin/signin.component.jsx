import './signin.component.css';
import { UseStateContext } from '../../context/contextProvider';
import IsLoading from '../isloading/isLoading';
import { Navigate, Link } from 'react-router-dom';

const SignIn = () => {
    const {handleEmail, handlePassword, handleSignIn, isLoading} = UseStateContext();
    return (
        <div className='flex justify-center'>
            {isLoading && <IsLoading text='Signing in....'/>}
            <div className="flex flex-col bg-white w-[40%] min-h-96 items-center relative top-20 space-y-11">
                <h1 className='signin-header'>Welcome</h1>
                <div className='relative w-[90%]'>
                    <form id="signin-form" onSubmit={handleSignIn}>
                        <div className="flex xs:flex xs:flex-col sm:flex sm:flex-col relative w-full space-y-7">
                            {/* <div className="flex flex-col">
                                <h1 className="text-gray-400">Name</h1>
                                <input value={name} type="text" name="name" placeholder="Name" required  className="h-10 pl-2 mr-10 rounded-lg text-gray-700 bg-white border-2 border-gray-700 sm:mb-4 sm:w-80 xs:mb-4 xs:w-80"/>
                            </div> */}

                            <div className="flex flex-col relative w-full space-y-2">
                                <label for="email">Email</label>
                                <input type="email" onChange={handleEmail} id='email' name="email" placeholder="Email" required className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500 relative w-full"/>
                            </div>

                            <div className="flex flex-col relative w-full space-y-2">
                            <label for="password">Password</label>
                            <input type="password" onChange={handlePassword} id="password" name="password" placeholder="Password" required className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500 relative w-full"/>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12" >
                            <button className="signin-button" type='submit'>Submit</button>
                        </div>
                        
                    </form>
                </div>

                <div className='my-7'>
                        Not registered yet?
                    </div>
                    <div className='pb-3'>
                        <Link to='/signup'>
                            <button className="signin-button">Sign Up</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
};

export default SignIn;