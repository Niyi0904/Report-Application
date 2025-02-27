import Navbar from "../../components/navbar/navbar.component";
import Evangelism from "../../components/evangelism/evangelism.component";
import { firestore } from "../../firebase/firebase.utils";
import {collection, collectionGroup, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UseStateContext } from "../../context/contextProvider";

import InputEvangelism from "../../components/input-report/input-report.component";


const AdminEvangelismReportPage = () => {
    const {currentUserProfile, onAdd, user, setOnAdd} = UseStateContext();
    const [doc, setDoc] = useState([]);
    const [total, setTotal] = useState(0)

    const handleAddNewReport = () => {
        setOnAdd(true);
    }

    useEffect( () => {

        const getUser = async () => {
            if (currentUserProfile) {
                try {
                    // Correcting the Firestore query
                    const collectionRef = collection(firestore, "users");
                    const q = query(collectionRef, where("name", "!=", "Nicholas Nike "));

                    const querySnapshot = await getDocs(q);
                    
                    const users = querySnapshot.docs.map((user) => ({
                        id: user.id,
                        name: user.data().name
                    }));
                    
                    console.log(users);
                    const userData = users.map(async (user) => {
                        let totalReport = 0;
                        const userCollectionRef = collection(firestore, 'users', user.id, 'Evangelism-Report');
                        const userDocs = await getDocs(userCollectionRef);

                        userDocs.docs.map((userdoc) => { 
                            if (userdoc.id.startsWith(`2025-01`)) {
                                totalReport += Object.keys(userdoc.data().TodaysReport).length
                            }
                        })

                        console.log(user.name, totalReport);
                    })

        
                } catch (error) {
                    console.error("Error fetching documents:", error.message);
                }
            }
        };

        getUser(); 
    }, [user]) 

    return (
        <div id="niyi" className="home-container mt-10">
            {doc.name} reached out to {doc.total}
        </div>
)};

export default AdminEvangelismReportPage;