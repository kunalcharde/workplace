import { Button, Grid } from '@mui/material';
import React from 'react'
import { useContext } from 'react'
import { userContext } from "../../../Context/userContext";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./style.css"
import { Label } from '@mui/icons-material';
const CandidateProfile = () => {
  const [state, dispatch] = useContext(userContext)
  return (
    <div className="container">
      
      <div className="profile-container">
        <div className="button-container"><Button variant="outlined" size="small">Logout</Button > <Button variant="outlined" size="small">Edit</Button></div>
        <div className='header'><div className='name'>{state.userInfo.name}</div><div className='location'><LocationOnOutlinedIcon/>{state.userInfo.location}</div></div>
        <div className="body-container">
        <div className='body'>
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
  )
}

export default CandidateProfile
