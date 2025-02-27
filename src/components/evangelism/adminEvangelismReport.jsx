import Navbar from "../../components/navbar/navbar.component";
import Evangelism from "../../components/evangelism/evangelism.component";
import { firestore } from "../../firebase/firebase.utils";
import {collection, collectionGroup, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

import InputEvangelism from "../../components/input-report/input-report.component";


const AdminEvangelismReport = () => {
    const {currentUserProfile, onAdd, user, setOnAdd, month} = UseStateContext();
    const [doc, setDoc] = useState([]);
    const [total, setTotal] = useState(0)

    const handleAddNewReport = () => {
        setOnAdd(true);
    } 

    useEffect( () => {

        const getUser = async () => {
            if (currentUserProfile) {
                try {
                    const collectionRef = collection(firestore, "users");
                    const q = query(collectionRef, where("name", "!=", "Nicholas Nike "));

                    const querySnapshot = await getDocs(q);

                    querySnapshot.docs.map((f) => {
                        console.log(f);
                    })
                    
                    const users = querySnapshot.docs.map((user) => ({
                        id: user.id,
                        name: user.data().name,
                        lastLogin: user.data().lastLogin?.toDate() || "No login recorded", // Convert Firestore timestamp

                    }));
                    
                    const ReportCount = users.map(async (user) => {
                        let totalReport = 0;
                        const userCollectionRef = collection(firestore, 'users', user.id, 'Evangelism-Report');
                        const userDocs = await getDocs(userCollectionRef);

                        userDocs.docs.map((userdoc) => { 
                            if (userdoc.id.startsWith(`${month}`)) {
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
                    
                    setDoc(userReportData);
        
                } catch (error) {
                    console.error("Error fetching documents:", error.message);
                }
            }
        };

        getUser(); 
    }, [user, month]) 

    return (
        <div className="home-container mt-16">
            {doc ? doc.map((d) => (
                <div className=' follow-up-bg w-[85%] mx-auto top-10 mt-5 rounded-md'>
                    <div>{d.name} did a total of <span>{d.total}</span> outreaches</div> 
                    <div></div>
                </div>
            )) : (<div>Nothing to see here</div>)}
        </div>
)};

export default AdminEvangelismReport;