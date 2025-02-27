import { createContext, useContext, useState } from "react";
import { firestore, auth } from "../firebase/firebase.utils";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { createUserProfileDocument } from "../firebase/firebase.utils";
import { FieldValue, SnapshotMetadata, arrayUnion } from 'firebase/firestore';


const StateContext = createContext();
export const ContextProvider =({children}) => {
// GLOBAL STATES
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserProfile, setCurrentUserprofile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onAdd, setOnAdd] = useState(false);
  const [user, setUser] = useState(undefined);

  const [admin, setAdmin] = useState('');
  const handleAdmin = (e) => (
    setAdmin(e.target.value)
  );

  const [month, setMonth] = useState('');
    const handleMonth = (e) => {
        setMonth(e.target.value)
    }


  const [others, setOthers] = useState('');
  const handleOthers = (e) => (
    setOthers(e.target.value)
  );

// REGISTRATION/AUTHENTICATION STATES AND FUNCTIONS
  const [name, setName] = useState('');
  const handleName = (e) => (
    setName(e.target.value)
  );

  const [date, setDate] = useState('');
  const handleDate = (e) => (
    setDate(e.target.value)
  );

  const [phone, setPhone] = useState('');
  const handlePhone = (e) => (
    setPhone(e.target.value)
  );

  const [email, setEmail] = useState('');
  const handleEmail = (e) => (
    setEmail(e.target.value)
  );

  const [password, setPassword] = useState('');
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  };

  const [gender, setGender] = useState('');
  const selectGender = () => {
    const selected = document.getElementById('gender').value;
    setGender(selected);
  };

  const [prayerGroup, setPrayerGroup] = useState('');
  const selectPrayerGroup = () => {
    const selectedPrayerGroup = document.getElementById('prayer-group').value;
    setPrayerGroup(selectedPrayerGroup);
  };


// EVANGELISM STATES AND FUNCTIONS
  const [address, setAddress] = useState('');
  const handleAddress = (e) => (
    setAddress(e.target.value)
  );

  const [status, setStatus] = useState('');
  const handleStatus = () => {
    const selected = document.getElementById('status').value;
    setStatus(selected);
  }

  const [report, setReport] = useState('')
  const handleReport = (e) => (
    setReport(e.target.value)
  );

// FOLLOW-UP STATES AND FUNCTIONS
  const [topic, setTopic] = useState('');
  const handleTopic = (e) => (
    setTopic(e.target.value)
  );

  const [time, setTime] = useState('');
  const handleTime = (e) => (
    setTime(e.target.value)
  );

  const [remark, setRemark] = useState('');
  const handleRemark = (e) => (
    setRemark(e.target.value)
  );

  const [duration, setDuration] = useState('')
  const handleDuration = (e) => (
    setDuration(e.target.value)
  );
  
// SIGNUP WITH EMAIL AND PASSWORD
  const handleSignUp = async event =>{
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
      prayerGroup,
      admin 
    }


    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user);
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
        console.log(getUser.data())
      }
    } catch (error) {
      setTimeout(setIsLoading(false), 1000);
      alert(error.code);
    }
  };

// SIGNIN WITH EMAIL AND PASSWORD
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

        const userReference = doc(firestore, 'users', user.uid);
        const update = await updateDoc(userReference, {
          lastLogin: serverTimestamp(),
        });

        console.log(userData)

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        
      }
      
      console.log(user);
      

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

// ADD EVANGELISM REPORT FUNCTION
  const handleAddEvangelismReport = () => {
    setOnAdd(false);

    if (date.trim() !== '') {
      setOnAdd(false);
      const stateChange = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const uid = userAuth.uid
          const userRef = firestore.doc(`users/${uid}`);
          const userRefCollectionPosts = userRef.collection('Evangelism-Report').doc(date)
          const snapshot = await userRefCollectionPosts.get()

          if (snapshot.exists) {
            try{
              await userRefCollectionPosts.update({
              TodaysReport:arrayUnion({
                NAME: name,
                STATUS: status,
                PHONE: phone,
                ADDRESS: address, 
                OTHERS: others
              })
              })
            } catch(error) {
              alert(error);
            }
        
            console.log('updated');
          } else {
            try{
              userRefCollectionPosts.set({
                TodaysReport:arrayUnion({
                  NAME: name,
                  STATUS: status,
                  PHONE: phone,
                  ADDRESS: address,
                  OTHERS: others
                })
              });

              setUser(userRefCollectionPosts);
            } catch(error) {
              alert(error);
            }
            
            console.log('done setting');
          }
        } else {
          alert('You have to login First');
        };
      });
    } else {
      alert('Please Fill Required Areas');
    }
  }
  
// ADD FOLLOW-UP REPORT FUNCTION
const handleAddFollowUpReport = () => {
  setOnAdd(false);

  if (date.trim() && name.trim() !== '') {
    setOnAdd(false);
    const stateChange = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const uid = userAuth.uid
        const userRef = firestore.doc(`users/${uid}`);
        const userRefCollectionPosts = userRef.collection('FollowUp-Report').doc(date)
        const snapshot = await userRefCollectionPosts.get()

        if (snapshot.exists) {
          await userRefCollectionPosts.update({
          TodaysReport:arrayUnion({
            NAME: name,
            TOPIC: topic,
            DURATION: duration,
            TIME: time, 
            REMARKS: remark,
            OTHERS: others
          })
          })
      
          console.log('updated');
        } else {
          userRefCollectionPosts.set({
            TodaysReport:arrayUnion({
              NAME: name,
              TOPIC: topic,
              DURATION: duration,
              TIME: time, 
              REMARKS: remark,
              OTHERS: others
            })
          });
          
          setUser(userRefCollectionPosts);
          console.log('done setting');
        }
      } else {
        alert('You have to login First');
      };
    });
  } else {
    alert('Please Fill Required Areas');
  }
}

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
      handleSignUp,
      handleSignIn,
      selectGender,
      selectPrayerGroup,
      currentUser,
      setCurrentUser,
      isLoading, setCurrentUserprofile,
      currentUserProfile,
      report,
      date,
      handleDate,
      handleReport,
      handleAddEvangelismReport,
      onAdd,
      setOnAdd,
      user,
      address,
      handleAddress,
      status,
      handleStatus,
      others,
      handleOthers,
      setTopic,
      handleTopic,
      setTime,
      handleTime,
      setDuration,
      handleDuration,
      setRemark, 
      handleRemark,
      handleAdmin,
      handleAddFollowUpReport,
      month,
      handleMonth }}
  >
    {children}
  </StateContext.Provider>
)};

export const UseStateContext = () => useContext(StateContext);