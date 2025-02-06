import './signup.component.css';
import { UseStateContext } from '../../context/contextProvider';
import IsLoading from '../isloading/isLoading';

const SignUp = () => {
    const { handleName, handlePhone, handleEmail, handlePassword, handleConfirmPassword, handleSubmit, selectGender, selectPrayerGroup, name, phone, email, password, confirmPassword, isLoading} = UseStateContext();
 
    return (
        <div className='flex justify-center'>
            {isLoading && <IsLoading text='Registering...'/>}
            <div className="flex flex-col sign-up-bg rounded-md w-[40%] xs:w-[90%] sm:w-[90%] min-h-96 items-center relative top-7 space-y-11">
                <h1 className='signin-header'>Register</h1>
                <div className='relative w-[90%]'>
                    <form id="signin-form" onSubmit={handleSubmit} >
                        <div className="flex flex-col relative w-full space-y-7">
                            <div className="flex flex-col relative w-full space-y-2">
                                <label for="name">Name</label>
                                <input 
                                    type="text" 
                                    id='name' 
                                    value={name} 
                                    name="name" 
                                    placeholder="Name" 
                                    required 
                                    className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500 text-black relative w-full" 
                                    onChange={handleName}
                                /> 
                            </div> 

                            <div className="flex flex-col relative w-full space-y-2">
                                <label for="name">Phone</label>
                                <input 
                                    type="tel" 
                                    id='phone' 
                                    value={phone} 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    required 
                                    className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500 text-black relative w-full" 
                                    onChange={handlePhone}
                                />
                            </div>

                            <div className="flex flex-col relative w-full space-y-2">
                                <label for="email">Email</label>
                                <input 
                                    type="email" 
                                    id='email' 
                                    value={email} 
                                    name="email" 
                                    placeholder="Email" 
                                    required 
                                    className="h-8 pl-2 mr-10 rounded-md bg-white border-2 border-gray-500  text-black relative w-full"
                                    onChange={handleEmail}
                                />
                            </div>

                            <div className="flex flex-col relative w-full space-y-2">
                                <label for="password">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    value={password} 
                                    name="password" 
                                    placeholder="Password" 
                                    required 
                                    className="h-8 pl-2 rounded-md bg-white border-2 border-gray-500 text-black"
                                    onChange={handlePassword}
                                />
                                <div className='text-sm font-thin'>
                                    <h1>Password must contain</h1>
                                    <ol className='list-disc list-inside'>
                                        <li>Uppercase character</li>
                                        <li>Lowercase character</li>
                                        <li>Numeric character</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="flex flex-col relative w-full space-y-2">
                                <label for="password">Confirm Password</label>
                                <input 
                                    type="password" 
                                    id="confirm-password" 
                                    value={confirmPassword} 
                                    name="confirm-password" 
                                    placeholder="Confirm Password" 
                                    required 
                                    className="h-8 pl-2 rounded-md bg-white border-2 border-gray-500 text-black"
                                    onChange={handleConfirmPassword}
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label for="gender">Gender</label>
                                <select id='gender' className='h-8 pl-2 rounded-md bg-white border-2 border-gray-500' onChange={selectGender}>
                                    <option value='select gender'>Select gender</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label for="prayer-group">Prayer Group</label>
                                <select id='prayer-group' className='h-8 pl-2 rounded-md bg-white border-2 border-gray-500' onChange={selectPrayerGroup}>
                                    <option value='monday-morning'>Monday Morning (7:00am - 10:00am) </option>
                                    <option value='monday-evening'>Monday Evening  (6:00pm - 9:00pm)</option>
                                    <option value='tuesday-morning'>Tuesday Morning (7:00am - 10:00am)</option>
                                    <option value='tuesday-evening'>Tuesday Evening (6:00pm - 9:00pm)</option>
                                    <option value='wednesday-morning'>Wednesday Morning (7:00am - 10:00am)</option>
                                    <option value='thursday-morning'>Thursday Morning (7:00am - 10:00am)</option>
                                    <option value='thursday-evening'>Thursday Evening (6:00pm - 9:00pm)</option>
                                    <option value='friday-morning'>Friday Morning (7:00am - 10:00am)</option>
                                    <option value='friday-evening'>Friday Evening (6:00pm - 9:00pm)</option>
                                    <option value='saturday-morning'>Saturday Morning (7:00am - 10:00am)</option>
                                    <option value='sunday'>Sunday (2:30pm - 5:30pm)</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12 pb-5" >
                            <button className="signin-button" type='submit'>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;