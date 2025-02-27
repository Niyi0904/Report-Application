import Navbar from "../../components/navbar/navbar.component";
import Evangelism from "../../components/evangelism/evangelism.component";
import { firestore } from "../../firebase/firebase.utils";
import {collection, collectionGroup, getDocs, where, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

import InputEvangelism from "../../components/input-report/input-report.component";


const AdminFollowUpReport = () => {
    const {currentUserProfile, onAdd, user, setOnAdd, month} = UseStateContext();
    const [doc, setDoc] = useState([]);
    const [total, setTotal] = useState(0)

    const handleAddNewReport = () => {
        setOnAdd(true);
    } 

    const getUser = useCallback(async () => {
        if (currentUserProfile) {
            try {
                const collectionRef = collection(firestore, "users");
                const q = query(collectionRef, where("name", "!=", "Nicholas Nike "));

                const querySnapshot = await getDocs(q);
                
                const users = querySnapshot.docs.map((user) => ({
                    id: user.id,
                    name: user.data().name
                }));
                
                const ReportCount = users.map(async (user) => {
                    const userCollectionRef = collection(firestore, 'users', user.id, 'FollowUp-Report');
                    const userDocs = await getDocs(userCollectionRef);
                    
                    let totalReport = 0;

                    userDocs.forEach((userdoc) => { 
                        if (userdoc.id.startsWith(month)) {
                            totalReport += Object.keys(userdoc.data().TodaysReport).length
                        }
                    });

                    return totalReport
                })

                const getTotalReportCount = await Promise.all(ReportCount);

                const userReportData = users.map((user, index) =>({ 
                    name: user.name,
                    total: getTotalReportCount[index]
                }))

                console.log(userReportData)
                
                setDoc(userReportData);
                console.log(doc);
    
            } catch (error) {
                console.error("Error fetching documents:", error.message);
            }
}}, [currentUserProfile, month]);

    useEffect(() => {
        getUser(); 
    }, [getUser]) 

    return (
        <div className="home-container mt-16">
            {doc ? doc.map((d) => (
                <div className=' follow-up-bg w-[85%] mx-auto top-10 mt-5 rounded-md'>
                    <div>{d.name} did a total of <span>{d.total}</span> follow-ups</div> 
                    
                </div>
            )) : (<div>Nothing to see here</div>)}
        </div>
)};

export default AdminFollowUpReport;