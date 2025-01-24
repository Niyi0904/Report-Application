import './home.component.css';
import { UseStateContext } from '../../context/contextProvider';
import { Link } from 'react-router-dom';

const Home = ({ id, data }) => {
    const {onAdd, setOnAdd} = UseStateContext();

    const handle = () => {
        setOnAdd(true);
    }
    return(
    <div className='home-container'>
        <div className='relative bg-white w-[85%] min-h-96 mx-auto top-12 rounded-md'>
            <div className='text-center'>
                <div className='relative grid grid-cols-3 gap-y-4 gap-x-6 mx-auto px-3 text-left w-[100%] top-2'>
                    <Link to='/evangelismPage'>  
                        <button className='home-btn'>Evangelism Reports</button>
                    </Link>

                    <button className='home-btn'>Follow-up Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>
                    
                    <button className='home-btn'>Sunday Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Mid-week service Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Cell-meeting Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Prayer Group Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Study Group Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Vigil Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Special meetings Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>

                    <button className='home-btn'>Offering Reports <span className='inline-block bg-slate-400 w-[40%] rounded-md'>Beta</span></button>
                </div>
            </div>
</div> 
    </div>
)};

export default Home;