import { UseStateContext } from "../../context/contextProvider";
import './input-report.component.css';

const Input = () => {
    const {
      report,
      date,
      reportType,
      handleDate,
      handleReport,
      handleReportType,
      handleAdd,
      setOnAdd
    } = UseStateContext();

    const handleCancel = () => {
      setOnAdd(false);
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className='mobile-container xs:w-[80%] sm:w-[80%]'>
        <div className='mobile-sub-container flex flex-col justify-center relative w-[90%]'>
          <div className='relative w-full flex justify-center mx-auto bottom-3 rounded-md'>
            <h1 className='input-header text-2xl  tracking-wider font-medium'>Add New Report</h1>
          </div>

          <label for="date" className="text-lg  tracking-wider font-medium">Date</label>
          <input 
            id="date"
            type='date'
            onChange={handleDate}
            className='mobile-input-date rounded-md h-10 pl-2'
          />

          <label for="report-type" className="text-lg  tracking-wider font-medium">Type of Report</label>
          <select id='report-type' className='h-10 pl-2 relative w-[100%] rounded-md bg-white border-gray-500' onChange={handleReportType}>
              <option value='report type'>Report Type</option>
              <option value='Evangelism Report'>Evangelism</option>
              <option value='Follow-up Report'>Follow-Up</option>
          </select>

          <div className="pt-8">
            <label for="report" className="text-lg  tracking-wider font-medium">Input your report</label>
            <textarea
              id="report"
              type='text'
              onChange={handleReport}
              className= 'mobile-input-text mt-1 rounded-sm h-24'
            />
          </div>
          <div className="relative w-full h-full flex justify-between">
            <div className='relative bg-white w-[30%] h-9 mx-auto flex justify-center top-6 rounded-xl'>
                <button className='relative w-full bg-black text-white rounded-md text-lg  tracking-wider font-medium' onClick={handleAdd}>Add</button>
            </div>

            <div className='relative bg-white w-[30%] h-9 mx-auto flex justify-center top-6 rounded-xl'>
                <button className='relative w-full text-lg  tracking-wider font-medium bg-red-700 rounded-md text-white' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Input ;