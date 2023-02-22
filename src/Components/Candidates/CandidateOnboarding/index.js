import React, { useState } from "react";
import { Label } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import "./style.css";
import Autocomplete from "@mui/material/Autocomplete";
import CountrySelect from "../../../Constants/countries";
import Locations from "../../../Constants/Locations";
import primaryrole from "../../../Constants/Primary Role";
import LinkIcon from "@mui/icons-material/Link";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import skills from "../../../Constants/Skills";

const CandidateOnboarding = () => {
  const [Skill, setSkill] = React.useState([]);

  const handleChange = (event) => {
    setSkill(event.target.value);
  };
  return (
    <div className="candidate-onboarding-container">
       <div className="logout-btn" >
          <Button variant= "outlined" sx={{margin:"2rem 2rem 0 0"}}>
            Logout
          </Button>
          </div>
      
      <div className="candidate-onboarding-form">
      <h3>Setup Your Profile</h3>
        <Grid container spacing={2} sm={10} xs={12}>
          <Grid item xs={12} sm={6} >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              size="Normal"
              fullWidth
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
                size="Normal"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              size="Normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Locations}
              // sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Location" required fullWidth />
              )}
            />
          </Grid>
          <Grid xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={primaryrole}
              // sx={{ width: 300 }}
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
              label="Portfolio"
              variant="outlined"
              required
              size="Normal"
              fullWidth
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
              size="Normal"
              fullWidth
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
              options={skills}
              onChange={(e, newvalue) => {
                Skill.includes(newvalue)
                  ? setSkill([...Skill])
                  : setSkill([...Skill, newvalue]);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Skills" required fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={10} sx={{ display: "flex", flexWrap: "wrap" }}>
            {Skill.map((skill) => {
              if (skill !== null && skill !== "") {
                return <div className="skill-box">{skill}</div>;
              }
            })}
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="Bio"
              multiline
              minRows={4}
              fullWidth
            />
          </Grid>
          <Grid item  xs={12} sm={12}>
          <Box xs={12} sm={12} sx={{border:"1.2px dashed black",height:"5rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
             <Button variant="outlined" startIcon={<CloudUploadIcon/>}  sx={{Width:"50%", height:"50%"}}>
              Upload Resume
             </Button>
            </Box>
          </Grid>
          <Grid item  xs={12} sm={12} sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",m:"2rem 0"}}>
          <Button variant="contained" sx={{background:"#26d7ab"}}>
            Complete Setup
          </Button>
          </Grid>
          
        </Grid>
        
      </div>
    </div>
  );
};

export default CandidateOnboarding;
