import Navbar from "../../components/navbar/navbar.component";
import { firestore } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";
import InputEvangelism from "../../components/input-report/input-report.component";
import AdminFollowUpReport from "../../components/follow-up/adminFollowUpReport.component";
import Evangelism from "../../components/evangelism/evangelism.component";

import { InputFollowUp } from "../../components/input-report/input-report.component";

import './followupReportPage.component.css';
import FollowUp from "../../components/follow-up/follow-up.component";

const FollowupReportPage = () => {
    const {currentUserProfile, onAdd, user, setOnAdd, handleMonth} = UseStateContext();

    const handleAddNewReport = () => {
        setOnAdd(true);
    }
    
    return (
        <div id="niyi" className="home-container">
            {onAdd && <InputEvangelism/>}
            <Navbar/>
            <div className='relative title-bg w-full min-h-28 mx-auto text-center pt-6 top-6'>
                <h1 className='evangelism-header'>Follow-up Report</h1>
            </div>

            <div className='relative w-[100%] h-8 mx-auto flex justify-center top-9 mb-7 rounded-md'>
                <select id='admin' onChange={handleMonth} className='relative h-10 min-w-[20%] xs:min-w-[40%] px-4 sm:min-w-[40%] bg-sky-600 rounded-md text-md tracking-wide font-medium'>
                    <option value='2'>All</option>
                    <option value='2025-01'>January</option>
                    <option value='2025-02'>Feburary</option>
                    <option value='2025-03'>March</option>
                    <option value='2025-04'>April</option>
                    <option value='2025-05'>May</option>
                    <option value='2025-06'>June</option>
                    <option value='2025-07'>July</option>
                    <option value='2025-08'>August</option>
                    <option value='2025-09'>September</option>
                    <option value='2025-10'>October</option>
                    <option value='2025-11'>November</option>
                    <option value='2025-12'>December</option>
                </select>
            </div>


            {currentUserProfile.admin === 'yes' ? 
                (<AdminFollowUpReport/>)
                :
                (<FollowUp/>)
            }
        </div>
)};

export default FollowupReportPage;



