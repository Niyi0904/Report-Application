import './home.component.css';
import { UseStateContext } from '../../context/contextProvider';
import { Link } from 'react-router-dom';

const Home = ({ id, data }) => {
    const {onAdd, setOnAdd} = UseStateContext();

    const handle = () => {
        setOnAdd(true);
    }
    return(
    <div>
        <div className='relative bg-white w-[85%] min-h-96 mx-auto top-12 rounded-md'>
            <div className='text-center'>
                <div className='relative grid grid-cols-3 gap-y-6 mx-auto px-3 text-left w-[60%] top-5'>
                    <Link to='/follow-up'>  
                        <button className='home-btn'>Follow-up Reportd</button>
                    </Link>
                    
                    <Link to='/evangelismPage'>  
                        <button className='home-btn'>Evangelism Reports</button>
                    </Link>
                    <button className='home-btn'>Sunday Reports</button>
                    <button className='home-btn'>Mid-week service Reports</button>
                    <button className='home-btn'>Cell-meeting Reports</button>
                    <button className='home-btn'>Prayer Group Reports</button>
                    <button className='home-btn'>Study Group Reports</button>
                    <button className='home-btn'>Vigil Reports</button>
                    <button className='home-btn'>Special meetings Reports</button>
                    <button className='home-btn'>Offering Reports</button>
                </div>
            </div>
</div> 
    </div>
)};

export default Home;