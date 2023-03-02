import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(DialogTitleProps) {
  const { children, onClose, ...other } = DialogTitleProps;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs({ job }) {
  console.log("Job Profile", job);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Job
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {job.companyName} <br />
          <p>{job.companyTag}</p>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {/* <div className='jobp-title'><h4> Job Title :</h4> <p>{job.jobTitle}</p></div>    */}
            <Grid conatiner xs={12}>
              <Grid
                item
                sm={5}
                md={5}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>Job Title :</h4>
                <p>{job.jobTitle}</p>
              </Grid>
            </Grid>
          </Typography>
          <Typography gutterBottom>
            <h4>Job Description :</h4>
          </Typography>
          <Typography gutterBottom>
            {/* {job.jobDescription} */}
            Founded in 2022, Eonlint is a modern age product development company
            helping multiple startup founders build their dream technical
            products. We are the tech partners of many funded startups in the
            fintech, community, media, logistics and e-commerce space. Some of
            our clients include AllschoolsandCollages. With just A year in the
            business, we are already growing at a good pace and have a team of
            engineers working to build sustainable and highly complex technology
            solutions
          </Typography>
          <Typography gutterBottom>
            <Grid container xs={12} sm={12}>
              <Grid item sm={6} md={6}>
                <h4>Salary :</h4>
                {<p>{job.salaryRange.currency} {job.salaryRange.min}- {job.salaryRange.max} CTC</p>}
              </Grid>
              <Grid item sm={6} md={6}>
                <h4>Company Type</h4>
                <p>Hybrid</p>
              </Grid>
            </Grid>
          </Typography>
          <Typography gutterBottom>
            <Grid container xs={12} sm={12}>
              <Grid item sm={6} md={6}>
                <h4>Location</h4>
                <p>{job.jobLocation}</p>
              </Grid>
              <Grid item sm={6} md={6}>
                <h4>Website</h4>
                <p>
                  <a href="https://www.website.com" alt="Linkdin">
                    https://www.website.com
                  </a>{" "}
                </p>
              </Grid>
            </Grid>
          </Typography>
          <Typography gutterBottom>
            <Grid container xs={12} sm={12}>
              <Grid item sm={6} md={6}>
                <h4>Linkedin</h4>
                <p>
                  <a href="https://www.linkedin.com" alt="Linkdin">
                    https://www.linkedin.com
                  </a>{" "}
                </p>
              </Grid>
            </Grid>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
