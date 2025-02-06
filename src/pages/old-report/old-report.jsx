import Navbar from "../../components/navbar/navbar.component";
import OldReportComponent from "../../components/old-report/old-report.component";
import { firestore } from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

const OldReport = () => {
    const {currentUserProfile, user, setOnAdd} = UseStateContext();
    const [doc, setDoc] = useState([]);

    const handle = () => {
        setOnAdd(true);
    }

    useEffect( () => {

        const getUser = async () => {
            if (currentUserProfile) {
                const userRef = firestore.doc(`users/${currentUserProfile.uid}`);
                const userRefCollectionPosts = userRef.collection('reports')
                const snapshot = await userRefCollectionPosts.get();
                
                const fetchedDocs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(), // Fetch the entire document data
                }));

                setDoc(fetchedDocs);
            }
        }

        getUser();
    }, [user])

    return (
        <div id="niyi" className="home-container">
            <Navbar/>
            <div className='relative title-bg w-full min-h-28 mx-auto text-center pt-6 top-6'>
                <h1 className='home-header'>Old Report</h1>
            </div>

            {currentUserProfile &&
                doc.map((doc) => (
                    <OldReportComponent key={doc.id} id={doc.id} data={doc.data} />
            ))}
        </div>
)};

export default OldReport;
































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