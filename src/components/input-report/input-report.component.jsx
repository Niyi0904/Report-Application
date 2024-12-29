import { UseStateContext } from "../../context/contextProvider";
import './input-report.component.css';

const MobileCreateTodo = () => {
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
      <div className='mobile-container'>
        <div className='mobile-sub-container flex flex-col justify-center relative w-[90%]'>
        <div className='relative w-[35%] mx-auto bottom-2 rounded-md'>
          <h1 className='input-header text-xl'>Add New Report</h1>
        </div>

          <label for="date">Date</label>
          <input 
            id="date"
            type='date'
            onChange={handleDate}
            className='mobile-input-date rounded-md h-8'
          />
          <label for="report-type">Type of Report</label>
          <select id='report-type' className='h-8 pl-2 relative w-[50%] rounded-md bg-white border-2 border-gray-500' onChange={handleReportType}>
              <option value='report type'>Report Type</option>
              <option value='Evangelism Report'>Evangelism</option>
              <option value='Follow-up Report'>Follow-Up</option>
          </select>
          <div className="pt-4">
            <label for="report">Input your report</label>
            <textarea
              id="report"
              type='text'
              onChange={handleReport}
              className= 'mobile-input-text mt-5 rounded-xl h-20'
            />
          </div>
          <div className=" flex justify-between">
            <div className='relative bg-white w-[20%] h-8 mx-auto flex justify-center top-4 rounded-md'>
                <button className='relative w-full bg-black text-white rounded-md' onClick={handleAdd}>Add</button>
            </div>

            <div className='relative bg-white w-[20%] h-8 mx-auto flex justify-center top-4 rounded-md'>
                <button className='relative w-full bg-sky-600 rounded-md text-white' onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default MobileCreateTodo ;