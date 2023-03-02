import { Button, Grid } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { userContext } from "../../../Context/userContext";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./style.css";
const CandidateProfile = () => {
  const [state, dispatch] = useContext(userContext);
  // Logout Function
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  // handleEdit  function use to edit the information that are fill in onboarding Form
  const handleEdit=()=>{
    navigate("/employer/onboarding")
  }
  return (
    <div className="container1">
      <div className="profile-container">
        <div className="button-container">
        <Button variant="outlined" size="small" onClick={handleEdit}>
            Edit
          </Button>{" "}
          <Button variant="outlined" size="small" onClick={logout}>
            Logout
          </Button>
        </div>
        <div className="header">
          <div className="name">{state.userInfo.name}</div>
          <div className="location">
            <LocationOnOutlinedIcon />
            {state.userInfo.location}
          </div>
        </div>
        <div className="body-container">
          <div className="body">
            <Grid container spacing={1} sm={10} xs={10}>
              <Grid sm={12} xs={12}>
                <h5>Contact Information :</h5>
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Phone Number</p>
                {state.userInfo.phone}
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Email</p>
                {state.userInfo.email}
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Portfolio</p>
                {state.userInfo.portfolio}
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Linkedin</p>
                {state.userInfo.linkedin}
              </Grid>
              <Grid sm={12} xs={12}>
                <h5>Professional Information :</h5>
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Primary Role</p>
                {state.userInfo.primaryRole}
              </Grid>
              <Grid item sm={6} xs={12}>
                <p>Experience</p>
                {state.userInfo.experience}
              </Grid>
              <Grid item sm={12} xs={12}>
                <p>Skills</p>
                <Grid
                  gap={2}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", flexWrap: "Wrap" }}
                >
                  {state.userInfo.skills.map((skill) => {
                    return <div className="skill">{skill}</div>;
                  })}
                </Grid>
              </Grid>
              <Grid sm={12} xs={12}>
                <h5>Bio :</h5>
                {state.userInfo.bio}
              </Grid>
              <Grid sm={12} xs={12}>
                <h5>Resume:</h5>
                <a href={state.userInfo.resume}> Resume</a>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
