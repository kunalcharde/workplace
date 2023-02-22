import { Button, Grid, Pagination } from "@mui/material";
import React from "react";
// import authimg from "../../assets/authimg.png";
// import googlebtn from "../../assets/google-btn.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { userContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import {auth} from '../../FirebaseConfig';

 function Auth({type}){
  const navigate = useNavigate();
  const [state, dispatch] = useContext(userContext);
  const redirectUser = () => {
    if (
      // user exists
      false
    ) {
      if (
        // user exist as candidate but trying to login as employer
        false
      ) {
        //alert user he exist as candidate
      } else if (
        // user exist as employer but trying to login as candidate
        false
      ) {
        //alert user he exist as employer
      } else if (
        // user exist as candidate and trying to login as candidate
        true
      ) {
        // redirect to candidate profile
        navigate("/candidate/profile");
      } else if (
        // user exist as employer and trying to login as employer
        true
      ) {
        // redirect to employer profile
        navigate("/employer/profile");
      }
    } else {
      // user doesn't exist
      if (type === "candidate") {
        // redirect to candidate onboarding
        navigate("/candidate/onboarding");
      } else {
        // redirect to employer onboarding
        navigate("/employer/onboarding");
      }
    }
  };
  const singIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
       console.log(result,'result')
        const user = result.user;
        const { displayName, email, photoURL,uid } = user;

        dispatch({
          type: "LOGIN",
          payload: {
            displayName,
            email,
            photoURL,
            uid,
          }
        })
        redirectUser();

      })
      .catch((error) => {
        // Handle Errors here.
       console.log(error,'error')
      });
    };
  return (
    <Grid container>
      <Grid className="auth-btn-container" item xs={12} md={8}>
        <h1>Welcome {type}</h1>
        <h3>Please Sign In</h3>
        <div onClick={singIn} className="auth-btn">
          {/* <img src={"googlebtn"} alt="googlebtn" /> */}
          Sign In Button
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div>
          {/* <img width="100%" src={"authimg"} alt="authimg" /> */}
        </div>
      </Grid>
    </Grid>
  );
}


export default Auth;