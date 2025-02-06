import { UseStateContext } from "../../context/contextProvider";
import './input-report.component.css';

const InputEvangelism = () => {
    const { handleAdd, setOnAdd, address, handleAddress, status, handleStatus, others, handleOthers, handleDate, handlePhone, handleName, handleReportType, handleAddEvangelismReport } = UseStateContext();

    const handleCancel = () => {
      setOnAdd(false);
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className='mobile-evangelism-container w-[50%] xs:w-[85%] sm:w-[90%]'>
        <div className='mobile-sub-container flex flex-col justify-center relative w-[90%]'>
          <div className='relative w-full flex justify-center mx-auto bottom-3 rounded-md'>
            <h1 className='input-header text-xl  tracking-normal font-medium texts'>Add New Evangelism Report</h1>
          </div>

          <label for="date" className="text-lg mb-1 tracking-wider font-medium">Date</label>
          <input 
            id="date"
            type='date'
            onChange={handleDate}
            className='mobile-input-name rounded-sm h-10 pl-2'
          />

          <label for="name" className="text-lg  tracking-wider font-medium">Name</label>
          <input 
            id="name"
            type='text'
            onChange={handleName}
            className='mobile-input-name rounded-sm h-10 pl-2'
          />

          <div className="flex">
            <div className="flex flex-col">
              <label for="status" className="text-lg  tracking-wider font-medium">Status</label>
              <select id='status' className='h-10 pl-2 mobile-input-status relative w-[100%] rounded-sm bg-white border-gray-500' onChange={handleStatus}>
                  <option value='status'>Status</option>
                  <option value='Saved only'>Saved only</option>
                  <option value='Saved and Filled'>Saved and Filled</option>
              </select>
            </div>

            <div className="flex flex-col ml-5">
              <label for="phone" className="text-lg  tracking-wider font-medium">Phone Number</label>
              <input 
                id="phone"
                type='number'
                onChange={handlePhone}
                className='mobile-input-time rounded-sm h-10 pl-2'
              />
            </div>
          </div>

          <label for="address" className="text-lg mb-2 tracking-wider font-medium">Address</label>
          <input 
            id="address"
            type='text'
            onChange={handleAddress}
            className='mobile-input-phone rounded-sm h-16 pl-2'
          />

          <label for="others" className="text-lg  tracking-wider font-medium">Others</label>
            <textarea
              id="others"
              type='text'
              onChange={handleOthers}
              className= 'mobile-input-text mt-1 rounded-sm h-12'
            />

          <div className="relative w-full h-full flex justify-between">
            <div className='relative bg-white w-[30%] h-9 mx-auto flex justify-center top-6 rounded-xl'>
                <button className='relative w-full bg-black text-white rounded-md text-lg  tracking-wider font-medium' onClick={handleAddEvangelismReport}>Add</button>
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


export const InputFollowUp = () => {
  const { handleAdd, setOnAdd, handleDate, handleName, handleAddFollowUpReport, handleTopic, handleTime, handleDuration, handleRemark, handleOthers } = UseStateContext();

  const handleCancel = () => {
    setOnAdd(false);
}
return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className='mobile-followup-container xs:w-[90%] sm:w-[90%]'>
      <div className='mobile-sub-container flex flex-col justify-center relative w-[90%]'>
        <div className='relative w-full flex justify-center mx-auto bottom-3 rounded-md'>
          <h1 className='input-header text-xl tracking-normal font-medium texts'>Add New Follow-up Report</h1>
        </div>

        <label for="date" className="text-lg  tracking-wider font-medium">Date</label>
        <input 
          id="date"
          type='date'
          onChange={handleDate}
          className='mobile-input-name rounded-sm h-10 pl-2'
        />
  
          <label for="name" className="text-lg  tracking-wider font-medium">Name</label>
          <input 
            id="name"
            type='text'
            onChange={handleName}
            className='mobile-input-name rounded-sm h-10 pl-2'
          />
    

        
          <label for="topic" className="text-lg  tracking-wider font-medium">Topic</label>
          <input 
            id="topic"
            type='text'
            onChange={handleTopic}
            className='mobile-input-topic rounded-sm h-10 pl-2'
          />
            
        


        <div className="relative w-full flex mt-4 justify-between">
          <div>
            <label for="duration" className="text-lg  tracking-wider font-medium">Duration</label>
            <input 
              id="duration"
              type='text'
              onChange={handleDuration}
              className='mobile-input-duration rounded-sm h-10 pl-2'
            />
          </div>

          <div>
            <label for="time" className="text-lg  tracking-wider font-medium">Time</label>
            <input 
              id="time"
              type='time'
              onChange={handleTime}
              className='mobile-input-time rounded-sm h-10 pl-2'
            />
          </div>
        </div>

        <label for="remark" className="text-lg tracking-wider font-medium">Remarks</label>
        <textarea
            id="remark"
            type='text'
            onChange={handleRemark}
            className= 'mobile-input-text mt-1 rounded-sm px-1.5 py-0.5 h-14'
          />

        <label for="others" className="text-lg  tracking-wider mt-2 font-medium">Others</label>
          <textarea
            id="others"
            type='text'
            onChange={handleOthers}
            className= 'mobile-input-text rounded-sm px-1.5 py-0.5 h-14'
          />

        <div className="relative w-full h-full flex justify-between">
          <div className='relative bg-white w-[30%] h-9 mx-auto flex justify-center top-6 rounded-xl'>
              <button className='relative w-full bg-black text-white rounded-md text-lg  tracking-wider font-medium' onClick={handleAddFollowUpReport}>Add</button>
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

export default InputEvangelism ;