import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import "./job.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
function JobsCard({ job,applyonJob }) {
  console.log(job,"job")
  return (
    <div className="card-container">
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "15px 10px 20px 10px",
        }}
      >
        <Grid item xs={3}>
          <img src={job.companyLogo} alt="company logo"  className="companyLogo" />
        </Grid>
        <Grid className="company-info" item xs={6}>
          <h2>{job.companyName}</h2>
          <h3>{job.companyTag}</h3>
          <h4><Groups2OutlinedIcon sx={{marginRight:"5px"}}/> { job.companySize } employees</h4>
        </Grid>
        <Grid xs={3} md={2} sx={{display:"flex"}}>
          <LocationOnOutlinedIcon/>{job.jobLocation}
        </Grid>
      </Grid>
      <Grid className="job-info" container>
        <Grid xs={6} md={1}>
          {job.jobTitle}
        </Grid>
        <Grid xs={6} md={2}>
          {job.jobLocation}
        </Grid>
        <Grid xs={4} md={2}>
          - {job.jobType}
        </Grid>
        <Grid xs={3} md={2} >
          {`• ${job.salaryRange.currency} ${job.salaryRange.min}-${job.salaryRange.max}`}
        </Grid>
        <Grid xs={4} md={1}>
          {moment(job.createdAt.toDate()).startOf("day").fromNow()}
        </Grid>
        <Grid xs={6} md={2} >
          <button
          // onClick={()=>applyonJob(job)}
          className="viewprofile-btn">View Job</button>
        </Grid>
        <Grid xs={6} md={2} >
          <button
          onClick={()=>applyonJob(job)}
          className="apply-btn">Apply</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default JobsCard;
