import Navbar from "../../components/navbar/navbar.component";
import Home from "../../components/home/home.component";
import EvangelismPage from "../EvangelismReportPage/evangelismReportPage.component";
import { firestore } from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../firebase/firebase.utils";
import { UseStateContext } from "../../context/contextProvider";


import './homepage.css';

const HomePage = () => {

    return (
        <div id="niyi" className="h-screen relative">
            <Navbar/>
            <div className='relative homepage-header-bg w-full min-h-28 mx-auto text-center pt-6 top-6 mb-10'>
                <h1 className='home-header'>Your Weekly Reporting Application</h1>
            </div>

            <Home/>
        </div>
)};

export default HomePage;
































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