import HomePage from "./pages/Homepage/homepage";
import SignInAndSignUp from "./pages/SignInAndSignUpPage/signin-and-signup";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";
import { Routes, Route, Navigate } from "react-router-dom";

import { UseStateContext } from "./context/contextProvider";
import EvangelismReportPage from "./pages/EvangelismReportPage/evangelismReportPage.component";
import FollowUp from "./components/follow-up/follow-up.component";
const App = () => {
  const {currentUserProfile} = UseStateContext();
  return (
    
    <div>
      <Routes>
// THIS IS THE HOMEPAGE ROUTES
        <Route exact path='/' element= {
            currentUserProfile ? (
            <HomePage/>
            ) : (
              <Navigate to='/signin'/>)} 
          />

//THIS IS THE SIGNIN ROUTES
          <Route exact path='/signin' element= {
            currentUserProfile ? (
            <Navigate to='/' />
            ) : (
              <SignIn/>)} 
          />

// THIS IS THE SIGNUP ROUTES
          <Route exact path='/signup' element= {
            currentUserProfile ? (
            <Navigate to='/' />
            ) : (
              <SignUp/>)} 
          />


          {/* <Route exact path='/user' Component={User}/> */}
          <Route exact path="/evangelismPage" Component={EvangelismReportPage} />
          <Route exact path="/follow-up" Component={FollowUp} />
          <Route exact path='/signin' Component={SignIn} />
          <Route exact path='/signup' Component={SignUp} />
          {/* <Route exact path='/userprofile' Component={UserProfile} /> */}

        </Routes>
      {/* <SignInAndSignUp/> */}
    </div>
  );
}

export default App;
