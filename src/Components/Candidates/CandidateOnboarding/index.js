import { Label } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./style.css";
import Autocomplete from "@mui/material/Autocomplete";
import CountrySelect from "../../../Constants/countries";
import Locations from "../../../Constants/Locations";
import { db } from "../../../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { userContext } from "../../../Context/userContext";
import React, { useContext, useState } from "react";
import toastMessage from "../../utils/toastMessage";
import { useNavigate } from "react-router-dom";
import { primaryRole, skills, experience } from "../../../Constants";
import LinkIcon from "@mui/icons-material/Link";
import UploadFile from "../../Common/UploadFile";
import InputAdornment from "@mui/material/InputAdornment";

const CandidateOnboarding = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(userContext);
  const [userData, setUserData] = useState({
    name: state.user.displayName,
    email: state.user.email,
    phone: state.userInfo?.phone,
    location: state.userInfo?.location,
    experience: state.userInfo?.experience,
    primaryRole: state.userInfo?.primaryRole,
    portfolio: state.userInfo?.portfolio,
    linkedin: state.userInfo?.linkedin,
    skills: [],
    bio: state.userInfo?.bio,
    resume: state.userInfo?.resume,
  });

  const setSkills = (skill) => {
    //if skill is already present in the array then remove it
    // else add it
    if (userData.skills.includes(skill)) {
      setUserData({
        ...userData,
        skills: userData.skills.filter((item) => item !== skill),
      });
    } else {
      setUserData({ ...userData, skills: [...userData.skills, skill] });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);

    // // push data to firebase to collection userInfo
    const userId = state.user.email;
    // setDoc(doc ref, data)
    // doc(db ref, collection name, doc id)
    try {
      await setDoc(doc(db, "userInfo", userId), {
        ...userData,
        userId,
        userType: "candidate",
      });
      toastMessage("data saved successfully", "success");
      //Updating Context
      dispatch({
        type: "AddUSERINFO",
        payload: {
          ...userData,
          userId,
          userType: "candidate",
        },
      });
       // redirect to profile page
      navigate("/candidate/profile");
    } catch (err) {
      console.log(err);
      toastMessage("something went wrong", "error");
    }
  };
  // Logout Function
  const logout=()=>{
    dispatch({
      type: "LOGOUT",
    });
  }
  return (
    <div className="candidate-onboarding-container">
      <form onSubmit={submitData}>
        <div className="logout-btn">
          <Button variant="outlined" sx={{ margin: "2rem 2rem 0 0" }} onClick={logout}>
            Logout
          </Button>
        </div>
        <div className="candidate-onboarding-form">
          <h3>Setup Your Profile</h3>
          <Grid container spacing={2} sm={8} xs={10}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Name"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="flex">
                <CountrySelect />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  required
                  value={userData.phone}
                  size="Normal"
                  fullWidth
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Email"
                disable
                variant="outlined"
                required
                size="Normal"
                fullWidth
                value={userData.email}
                // onChange={(e) =>
                //   setUserData({ ...userData, email: e.target.value })
                // }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Location"
                disable
                variant="outlined"
                required
                value={userData.location}
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setUserData({ ...userData, location: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={userData.experience}
                options={experience}
                // sx={{ width: 300 }}
                onChange={(e, newValue) =>
                  setUserData({ ...userData, experience: newValue })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Experience"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={primaryRole}
                value={userData.primaryRole}
                // sx={{ width: 300 }}
                onChange={(e, newValue) =>
                  setUserData({ ...userData, primaryRole: newValue })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Primary Role"
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Portfolio / Github"
                variant="outlined"
                value={userData.portfolio}
                required
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setUserData({ ...userData, portfolio: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Linkdin"
                variant="outlined"
                required
                value={userData.linkedin}
                size="Normal"
                fullWidth
                onChange={(e) =>
                  setUserData({ ...userData, linkedin: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={userData.skills}
                options={skills}
                onChange={(event, newValue) => {
                  setSkills(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Skills" required fullWidth />
                )}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              {userData.skills.map((skill) => {
                if (skill !== null && skill !== "")
                  return (
                    <div className="skill-box">
                      <Grid sm={3} xs={3}>
                        {skill}
                      </Grid>
                    </div>
                  );
              })}
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="Bio"
                multiline
                value={userData.bio}
                minRows={4}
                fullWidth
                onChange={(e) =>
                  setUserData({ ...userData, bio: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box
                xs={12}
                sm={12}
                sx={{
                  border: "1.2px dashed black",
                  height: "8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UploadFile
                  type="doc"
                  onUpload={(url) => setUserData({ ...userData, resume: url })}
                  value={userData.resume}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                m: "2rem 0",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ background: "#26d7ab" }}
              >
                Complete Setup
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default CandidateOnboarding;
