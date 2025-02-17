import './evangelism.component.css';
import { UseStateContext } from '../../context/contextProvider';

const Evangelism = ({ id, data }) => {
    const {onAdd, setOnAdd} = UseStateContext();

    const handle = () => {
        setOnAdd(true); 
    }
    return(
    <div>
        <div className='relative evangelism-bg w-[85%] min-h-96 mx-auto top-10 mt-5 rounded-md'>
            <div className='text-center'>
                <h1 className='home-sub_header pb-8'>{id}</h1>
                <div className='relative pl-3 text-left w-[60%]'>
                    {Array.isArray(data.TodaysReport) && ( 
                        <ol className="list-decimal mx-4 text-lg text-gray-800">
                            {data.TodaysReport.map((report, index) => (
                                <li key={index} className='pb-4'>
                                     <div className='my-3 space-y-1'>
                                        <div><span className='font-bold'>Name:</span> {report.NAME}</div>

                                        <div><span className='font-bold'>Status:</span> {report.STATUS}</div>

                                        <div><span className='font-bold'>Phone:</span> {report.PHONE}</div>

                                        <div><span className='font-bold'>Address:</span> {report.ADDRESS}</div>

                                        <div><span className='font-bold'>Others:</span> {report.OTHERS}</div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                    )}
                </div>
            </div>
        </div>
    </div>
)};

export default Evangelism;



{/* <div className='relative bg-white w-[85%] min-h-96 mx-auto top-12 rounded-md'>
<div className='text-center'>
    <h1 className='home-sub_header pb-8'>{date} - {type}</h1>
    <div className='relative grid grid-cols-3 gap-y-6 mx-auto px-3 text-left w-[60%]'>
        <button className='home-btn'>Sunday Reports</button>
        <button className='home-btn'>Mid-week service Reports</button>
        <button className='home-btn'>Cell-meeting Reports</button>
        <button className='home-btn'>Prayer Group Reports</button>
        <button className='home-btn'>Study Group Reports</button>
        <button className='home-btn'>Vigil Reports</button>
        <button className='home-btn'>Special meetings Reports</button>
        <button className='home-btn'>Evangelism Reports</button>
        <button className='home-btn'>Offering Reports</button>
    </div>
</div>
</div> */}