import { Button, Grid } from '@mui/material';
import React from 'react'
import { useContext } from 'react'
import { userContext } from "../../../Context/userContext";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./style.css"

const EmployerProfile = () => {
  const [state, dispatch] = useContext(userContext)
  return (
    <div className="container1">
       <div className="profile-container">
        <Grid container sm={12}  xs={12} sx={{display:'flex',justifyContent:"space-between",borderBottom:"1px solid #000",paddingBottom:"1rem"}}>
          <Grid item sm={2} xs={2}>
            <img  src={state.userInfo.logo} alt="logo" width="50px" height="50px"/>
          </Grid>
          <Grid item sm={6} xs={4}>
            <div>{state.userInfo.companyName}</div>
            <div>{state.userInfo.companyTagline}</div>
          </Grid>
          <Grid item sm={4} xs={6} >
            <Button variant="outlined" size="small" sx={{gap: "2em",marginRight:"1rem"}}>Edit</Button>
            <Button variant="outlined" size="small">Logout</Button>
          </Grid>
        </Grid>
      <Grid container sm={12} xs={12}>
        <Grid item sm={12} xs={12}>
        <h5>Company Bio</h5>
        <p>{state.userInfo.companybio}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Phone number</h5>
          <p>{state.userInfo.phone}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Email</h5>
          <p>{state.userInfo.email}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Industry Type</h5> 
          <p>{state.userInfo.industryType}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Company Size</h5> 
          <p>{state.userInfo.companySize}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Location</h5> 
          <p>{state.userInfo.location}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Your Name</h5> 
          <p>{state.userInfo.name}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Your Role</h5> 
          <p>{state.userInfo.role}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Facebook</h5> 
          <p>{state.userInfo.facebook}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Twiter</h5> 
          <p>{state.userInfo.twitter}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Linkedin</h5> 
          <p>{state.userInfo.linkedin}</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <h5>Website</h5> 
          <p>{state.userInfo.website}</p>
        </Grid>
        
      </Grid>

       </div>
    </div>
  )
}


export default EmployerProfile
