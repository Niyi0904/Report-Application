import Navbar from "../../components/navbar/navbar.component";
import { firestore } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

import { InputFollowUp } from "../../components/input-report/input-report.component";

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
                const collectionRef = collection(firestore, 'users', `${currentUserProfile.uid}`, 'FollowUp-Report');
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
            {onAdd && <InputFollowUp/>}
            <Navbar/>
            <div className='relative title-bg w-full min-h-28 mx-auto text-center pt-6 top-6'>
                <h1 className='home-header'>Follow-up Report</h1>
            </div>

            <div className='relative w-[100%] h-8 mx-auto flex justify-center top-9 rounded-md'>
                <button className='relative h-10 min-w-[20%] xs:min-w-[40%] px-4 sm:min-w-[40%] bg-sky-600 rounded-md text-md tracking-wide font-medium' onClick={handle}>Add New Follow-Up Report</button>
            </div>

            {currentUserProfile &&
                doc.map((docs) => (
                    <FollowUp key={docs.id} id={docs.id} data={docs.data} />
            ))}
        </div>
)};

export default FollowupReportPage;



