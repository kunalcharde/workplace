import React from "react";
import { Label } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import "./style.css";
import Autocomplete from '@mui/material/Autocomplete';
import CountrySelect from "../../../Constants";
const CandidateOnboarding = () => {
  return (
    <div className="candidate-onboarding-container">
      onv
      <div className="candidate-onboarding-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
            <CountrySelect/>
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
              label="Name"
              variant="outlined"
              required
              size="Normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              size="Normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CandidateOnboarding;
