import Navbar from "../../components/navbar/navbar.component";
import { firestore } from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../firebase/firebase.utils";
import { UseStateContext } from "../../context/contextProvider";

import Input from "../../components/input-report/input-report.component";

import './followupReportPage.component.css';
import FollowUp from "../../components/follow-up/follow-up.component";

const FollowupReportPage = () => {
    const {currentUserProfile, onAdd, user, setOnAdd} = UseStateContext();
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
            {onAdd && <Input/>}
            <Navbar/>
            <div className='relative bg-white w-full min-h-28 mx-auto text-center pt-6 top-6 rounded-md'>
                <h1 className='home-header'>Evangelism Report</h1>
            </div>

            <div className='relative w-[100%] h-8 mx-auto flex justify-center top-9 rounded-md'>
                <button className='relative h-10 w-[20%] xs:w-[40%] sm:w-[40%] bg-sky-600 rounded-sm text-lg tracking-wide font-medium' onClick={handle}>Add New Report</button>
            </div>

            {currentUserProfile &&
                doc.map((doc) => (
                    <FollowUp key={doc.id} id={doc.id} data={doc.data} />
            ))}
        </div>
)};

export default FollowupReportPage;



