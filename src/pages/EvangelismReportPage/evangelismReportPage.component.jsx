import Evangelism from "../../components/evangelism/evangelism.component";
import AdminEvangelismReport from "../../components/evangelism/adminEvangelismReport";
import Navbar from "../../components/navbar/navbar.component";
import { firestore } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

import InputEvangelism from "../../components/input-report/input-report.component";

import './evangelismReportPage.component.css';

const EvangelismReportPage = () => {
    const {currentUserProfile, onAdd, user, setOnAdd, handleMonth} = UseStateContext(); 

    const handleAddNewReport = () => {
        setOnAdd(true);
    }

    return (
        <div id="niyi" className="home-container">
            {onAdd && <InputEvangelism/>}
            <Navbar/>
            <div className='relative title-bg w-full min-h-28 mx-auto text-center pt-6 top-6'>
                <h1 className='evangelism-header'>Evangelism Report</h1>
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
                (<AdminEvangelismReport/>)
                :
                (<Evangelism/>)
            }
        </div>
)};

export default EvangelismReportPage;
































// import Navbar from "../../components/navbar/navbar.component";
// import Home from "../../components/home/home.component";
// import { firestore } from "../../firebase/firebase.utils";
// import { useEffect, useState } from "react";
// import { getUserDetails } from "../../firebase/firebase.utils";
// import { UseStateContext } from "../../context/contextProvider";

// import MobileCreateTodo from "../../components/input-report/input-report.component";

// const HomePage = () => {
//     const {currentUserProfile} = UseStateContext();
//     const [doc, setDoc] = useState([]);

//     useEffect( () => {

//         const getUser = async () => {
//             if (currentUserProfile) {
//                 const userRef = firestore.doc(`users/${currentUserProfile.uid}`);
//                 const userRefCollectionPosts = userRef.collection('reports')
//                 const snapshot = await userRefCollectionPosts.get();
                
//                 const newDocs = [];
//                 snapshot.forEach(doc => {
//                     const todaysReport = doc.data().TodaysReport; // Ensure this is correctly structured
//                     newDocs.push({
//                         date: doc.id,
//                         reportDetails: Array.isArray(todaysReport) ? todaysReport : [todaysReport], // Ensure it's an array
//                     });
//                 });

//                     setDoc(newDocs);
//             }
//         }

//         getUser();
//     }, [])

//     return (
//         <div id="niyi">
//             {currentUserProfile && doc.map((doc) => (
//                 doc.reportDetails.map((detail, index) => (
//                     <Home 
//                         key={`${doc.date}-${index}`} 
//                         date={doc.date} 
//                         reportDetails={detail.ReportDetails}
//                         type={detail.ReportType}
//                     />
//                 ))
//             ))}
//         </div>
// )};

// export default HomePage;