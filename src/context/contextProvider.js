import { createContext, useContext, useState } from "react";
import { firestore, auth } from "../firebase/firebase.utils";
import { createUserProfileDocument } from "../firebase/firebase.utils";

import { addUserToFirestore } from "../firebase/firebase.utils";
// import { addUserToFirestore } from "../firebase/firebase.utils";
// import { Navigate } from "react-router";
// import { Link } from "react-router-dom";

const StateContext = createContext();

export const ContextProvider =({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserProfile, setCurrentUserprofile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [onAdd, setOnAdd] = useState(false);

  const [user, setUser] = useState(undefined)

    
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [prayerGroup, setPrayerGroup] = useState('');
  const [report, setReport] = useState('')
  const [date, setDate] = useState('');
  const [reportType, setReportType] = useState('');

  // auth.onAuthStateChanged(async userAuth =>{
  //   const uid = userAuth.uid
  //   const userRef = firestore.doc(`users/${uid}`)
  //   const snapshot = await userRef.get()
  //   const result = snapshot.data()


  // })
//   const [add, setAdd] = useState([]);
//   const [isClicked, setIsClicked] = useState(false);

//   const [userName, setUserName] = useState({
//     Name: '',
//     email: ''
//   });

  const handleName = (e) => (
    setName(e.target.value)
  );
  const handlePhone = (e) => (
    setPhone(e.target.value)
  );
  const handleEmail = (e) => (
    setEmail(e.target.value)
  );
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  const handleReport = (e) => (
    setReport(e.target.value)
  )
  const handleDate = (e) => (
    setDate(e.target.value)
  )
  const handleReportType = () => {
    const selected = document.getElementById('report-type').value;
    setReportType(selected);
  }
  const selectGender = () => {
    const selected = document.getElementById('gender').value;
    setGender(selected);
  }
  const selectPrayerGroup = () => {
    const selectedPrayerGroup = document.getElementById('prayer-group').value;
    setPrayerGroup(selectedPrayerGroup);
  }

  const handleSubmit = async event =>{
    event.preventDefault();

    setIsLoading(true);

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    } 

    const currentUserInfo = {
      name,
      phone,
      gender,
      prayerGroup
    }


    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // setCurrentUser(user)
      // if(currentUser) {
      //   console.log(currentUser);
      // }

      const currentUser = await createUserProfileDocument(user, currentUserInfo);
      // setCurrentUser(user);
  
      const getUser = await currentUser.get();

      if (getUser) {
        setCurrentUserprofile(getUser.data());
        setTimeout(setIsLoading(false), 1000);
      }
      // this.setState({
      //   displayName: '',
      //   email: '',
      //   password: '',
      //   confirmPassword: ''
      // });
    } catch (error) {
      setTimeout(setIsLoading(false), 1000);
      alert(error.code);
    }
  };

  const handleSignIn = async event =>{
    event.preventDefault();
    setIsLoading(true);
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      // setCurrentUser(user);
        
      const userRef = firestore.doc(`users/${user.uid}`);
  
      const getUser = await userRef.get();
  
      if (getUser.exists) {
        const userData = getUser.data();
        setCurrentUserprofile(userData);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        
        console.log(currentUserProfile.name);
      }

      

      // await createUserProfileDocument(user, currentUserInfo);
      // console.log("done");

    } catch (error) {
      setIsLoading(false);

      if (error.code === "auth/invalid-credential") {
        alert('invalid email or password');
      } else {
        console.log(error);
      }
    }
  };

  const newReport = {
    Date: date,
    ReportType: reportType,
    ReportDetails: report
  }

  const handleAdd = () => {
    setOnAdd(false);
    // if(newTask.plan.trim() && newTask.dates.trim() !== '') {
    //   setIsClicked(false);
    // }

    if(date.trim() && reportType.trim() && report.trim() !== '') {
      setOnAdd(false);
      const stateChange = auth.onAuthStateChanged(async userAuth => {
        // const uid = userAuth.uid
  
        // addUserToFirestore(uid, newTask)
  
        if (userAuth) {
          const uid = userAuth.uid
          const update = await addUserToFirestore(uid, newReport)
  
          const tas = update.get()
  
          setUser(tas);
        } else{
          alert('You have to login First')
        } 
      });
    }
  }

//   const newTask = {
//     plan: value,
//     dates: date
//   }

//   const handleAdd = () => {
//     if(newTask.plan.trim() && newTask.dates.trim() !== '') {
//       setIsClicked(false);
//     }

//     if(newTask.plan.trim() && newTask.dates.trim() !== '') {
//       const stateChange = auth.onAuthStateChanged(async userAuth => {
//         // const uid = userAuth.uid
  
//         // addUserToFirestore(uid, newTask)
  
//         if (userAuth) {
//           const uid = userAuth.uid
//           const update = await addUserToFirestore(uid, newTask)
  
//           const tas = update.get()
  
//           const result = (await tas).data()
  
//           setAdd(result.newTasks)
  
//           console.log(add)
//         } else{
//           alert('You have to login First')
//         } 
//       });
//     }
//   }

  return (
  <StateContext.Provider
    value={{
      name,
      setName,
      phone, 
      setPhone,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      handleName,
      handlePhone,
      handleEmail, 
      handlePassword,
      handleConfirmPassword,
      handleSubmit,
      handleSignIn,
      selectGender,
      selectPrayerGroup,
      currentUser,
      setCurrentUser,
      isLoading, setCurrentUserprofile,
      currentUserProfile,
      report,
      date,
      reportType,
      handleDate,
      handleReport,
      handleReportType,
      handleAdd,
      onAdd,
      setOnAdd,
      user
    //   isClicked, setIsClicked,
    //   userName, setUserName
    }}
  >
    {children}
  </StateContext.Provider>
)};

export const UseStateContext = () => useContext(StateContext);