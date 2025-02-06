import Firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { FieldValue, SnapshotMetadata, arrayUnion } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { json } from 'react-router';

const firebaseConfig = {
    apiKey: "AIzaSyD2MJqgXbwc48LP8uH8DFMdA9n1V2YEfZ0",
    authDomain: "reports-74d36.firebaseapp.com",
    projectId: "reports-74d36",
    storageBucket: "reports-74d36.firebasestorage.app",
    messagingSenderId: "99045565447",
    appId: "1:99045565447:web:afce1d0227c9e6e17376a2",
    measurementId: "G-ZGTBZ0N9YL"
  };

export const createUserProfileDocument = async (userAuth, userInfo) => {
  if (!userAuth) {
    return;
  } else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { email, uid } = userAuth;
      const {name, phone, gender, prayerGroup} = userInfo;
      const createdAt = new Date();

      try {
        await userRef.set({
          name,
          phone,
          email,
          gender,
          uid,
          prayerGroup,
          createdAt
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }}


// }



// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) {
//     return
//   } else {

//     const userRef = firestore.doc(`users/${userAuth.uid}`)
    
//     const userRefCollectionPosts =await userRef.collection('Posts');
  
//     const snapShot = await userRef.get();

//     console.log(snapShot.exists)
  
//     if (!snapShot.exists) {
//       const { displayName, email} = userAuth
//       const createdAt = new Date();
//       const posts = [
//         {
//           task: 'go to the gym ',
//           date: new Date()
//         }
//       ]
  
//       try {
//         await userRef.set({
//           displayName,
//           email,
//           createdAt,
//           posts,
//           ...additionalData
//         })
//         userRefCollectionPosts.doc('my tasks');
//         console.log('created')
//       } catch (error) {
//         console.log('error creating user', error.message);
//       }
//     }
   
//     return userRef
//   }
// }

// export const addUserToFirestore = async (id, newReport) => {
//   const userRef = firestore.doc(`users/${id}`);
//   const userRefCollectionPosts = userRef.collection('reports').doc(newReport.Date)
//   const snapshot = await userRefCollectionPosts.get()

//   const {ReportType, ReportDetails, Date} = newReport

//   if (snapshot.exists) {
//     await userRefCollectionPosts.update({
//     TodaysReport:arrayUnion({
//       Date,
//       ReportType,
//       ReportDetails
//     })
//     })

//     console.log('updated');
//   } else {
//     userRefCollectionPosts.set({
//       TodaysReport:arrayUnion({
//         Date,
//         ReportType,
//         ReportDetails
//       })
//     });

//     console.log('done setting');
//   }


//   // const theTasks = await userRefCollectionPosts.get()

//   // const data = theTasks.d
//       // const userRef = firestore.doc(`users/${id}`)
  
//       // // const userRefCollectionPosts = userRef.collection('Posts');

//       // const snapShot = await userRef.get();

//       // console.log(snapShot.exists);

//   return userRefCollectionPosts
// }

// export const getUserDetails = async (id) => {
//   const userRef = firestore.doc(`users/${id}`);
//   const userRefCollectionPosts = userRef.collection('report')
//   const snapshot = await userRefCollectionPosts.get()
//   const data = snapshot.

//   return snapshot;
// }



Firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

// const provider = new Firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default Firebase;