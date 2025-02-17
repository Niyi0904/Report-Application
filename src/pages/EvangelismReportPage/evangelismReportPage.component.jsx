import Navbar from "../../components/navbar/navbar.component";
import Evangelism from "../../components/evangelism/evangelism.component";
import { firestore } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

import InputEvangelism from "../../components/input-report/input-report.component";

import './evangelismReportPage.component.css';

const EvangelismReportPage = () => {
    const {currentUserProfile, onAdd, user, setOnAdd} = UseStateContext();
    const [doc, setDoc] = useState([]);

    const handleAddNewReport = () => {
        setOnAdd(true);
    }

    useEffect( () => {

        const getUser = async () => {
            if (currentUserProfile) {
                const collectionRef = collection(firestore, 'users', `${currentUserProfile.uid}`, 'Evangelism-Report');
                const snapshot = await getDocs(collectionRef)
                const fetchedDocs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(), // Fetch the entire document data;
                }));

                console.log(fetchedDocs.id)
                setDoc(fetchedDocs);
            }
        }

        getUser(); 
    }, [user]) 

    return (
        <div id="niyi" className="home-container">
            {onAdd && <InputEvangelism/>}
            <Navbar/>
            <div className='relative title-bg w-full min-h-28 mx-auto text-center pt-6 top-6'>
                <h1 className='evangelism-header'>Evangelism Report</h1>
            </div>

            <div className='relative w-[100%] h-8 mx-auto flex justify-center top-9 rounded-md'>
                <button className='relative h-10 min-w-[20%] xs:min-w-[40%] px-4 sm:min-w-[40%] bg-sky-600 rounded-md text-md tracking-wide font-medium' onClick={handleAddNewReport}>Add New Evangelism Report</button>
            </div>

            {currentUserProfile &&
                doc.map((doc) => (
                    <Evangelism key={doc.id} id={doc.id} data={doc.data} />
            ))}
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