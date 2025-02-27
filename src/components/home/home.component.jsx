import { useState, useEffect } from 'react';
import './home.component.css';
import { UseStateContext } from '../../context/contextProvider';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase.utils';
const Home = ({ id, data }) => {
    const {onAdd, setOnAdd, currentUserProfile} = UseStateContext();
    const [users, setUsers] = useState([]);

    const handle = () => {
        setOnAdd(true);
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = collection(firestore, "users");
            const querySnapshot = await getDocs(usersCollection);

            const usersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name || "Unknown",
                lastLogin: doc.data().lastLogin ? doc.data().lastLogin.toDate().toLocaleString() : "No login recorded",
            }));

            setUsers(usersData);
        };

        fetchUsers();
    }, []);



    return(
    <div className='home-container'>
        {currentUserProfile.admin === 'yes' && (
            <div className='follow-up-bg w-[85%] mx-auto top-15 mt-5 rounded-md'>
                <h2 className='home-sub_header pb-8'>Last Login of Users</h2>
                <ul className='ml-3'>
                    {users.map((user) => (
                        <li key={user.id} className='mb-2'>
                            <span className='text-xl font-medium'>{user.name}</span> <span className='text-xl font-medium'>- Last Login:</span> <span className='text-xl font-medium bg-slate-600 w-24 h-11 rounded-md'>{user.lastLogin}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        <div className='relative home-bg w-[95%] home-height mx-auto top-5 rounded-md'>
            <div className='text-center'>
                <div className='relative grid grid-cols-3 gap-y-4 gap-x-4 mx-auto px-6 text-left w-[100%] top-4'>
                    <Link to='/old-report'>  
                        <button className='home-btn'>Old Report</button>
                    </Link>
                    
                    <Link to='/evangelismPage'>  
                        <button className='home-btn'>Evangelism Reports</button>
                    </Link>

                    <Link to='/follow-up'>  
                        <button className='home-btn'>Follow-up Reports</button>
                    </Link>

                    
                    <button className='home-btn'>Sunday Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Mid-week service Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Cell-meeting Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Prayer Group Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Study Group Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Vigil Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Special meetings Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>

                    <button className='home-btn'>Offering Reports <span className='inline-block bg-slate-400 w-[40%] rounded-sm'>Beta</span></button>
                </div>
            </div>
        </div> 
    </div>
)};

export default Home;