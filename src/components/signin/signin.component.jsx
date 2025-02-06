import './signin.component.css';
import { UseStateContext } from '../../context/contextProvider';
import IsLoading from '../isloading/isLoading';
import { Navigate, Link } from 'react-router-dom';

const SignIn = () => {
    const {handleEmail, handlePassword, handleSignIn, isLoading} = UseStateContext();
    return (
        <div className='flex justify-center sign-in-container'>
            {isLoading && <IsLoading text='Signing in....'/>}
            <div className="flex flex-col rounded-md sign-in-bg w-[40%] xs:w-[90%] sm:w-[90%] min-h-96 items-center relative top-20 space-y-11">
                <h1 className='signin-header'>Welcome!</h1>
                <div className='relative w-[90%]'>
                    <form id="signin-form" onSubmit={handleSignIn}>
                        <div className="flex flex-col items-center relative w-full space-y-7">
                            {/* <div className="flex flex-col">
                                <h1 className="text-gray-400">Name</h1>
                                <input value={name} type="text" name="name" placeholder="Name" required  className="h-10 pl-2 mr-10 rounded-lg text-gray-700 bg-white border-2 border-gray-700 sm:mb-4 sm:w-80 xs:mb-4 xs:w-80"/>
                            </div> */}

                            <div className="flex flex-col item relative w-[100%] space-y-2">
                                <label for="email">Email</label>
                                <input type="email" onChange={handleEmail} id='email' name="email" placeholder="Email" required className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500 relative w-full"/>
                            </div>

                            <div className="flex flex-col relative w-[100%] space-y-2">
                            <label for="password">Password</label>
                            <input type="password" onChange={handlePassword} id="password" name="password" placeholder="Password" required className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500 relative w-full"/>
                            </div>
                        </div>

                        <div className=" flex justify-center mt-12 font-bold text-4xl w-full" >
                            <button className="signin-button items-center w-[50%]" type='submit'>Submit</button>
                        </div>
                        
                    </form>
                </div>

                <div className='my-7 font-medium text-xl'>
                        Not registered yet?
                    </div>
                    <div className='pb-10 pl-2 relative w-full flex flex-col'>
                        <Link to='/signup'>
                            <button className="relative signin-button w-[50%] justify-center">Sign Up</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
};

export default SignIn;