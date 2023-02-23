import React from "react";
import { Grid } from "@mui/material";
import "./Footer.css"
import footerimg from "../../assets/designlogo.png"
const FooterNav = () => {
  return (
    <div className="Footer">
      <Grid container sm={10} xs={10} className = "footer-content">
        <Grid item xs={2} sm={2}>
          <img width="75%" src={footerimg} alt ="WorkPlace"/>
        </Grid>
        <Grid item xs={2} sm={2} > About</Grid>
        <Grid item xs={2} sm={2}>Jobs</Grid>
        <Grid item xs={2} sm={2}>Contact Us</Grid>
        <Grid item xs={2} sm={2}>Terms</Grid>
        <Grid item xs={2} sm={2}>Privacy Policy</Grid>
      </Grid>
    </div>
  );
};

export default FooterNav;
