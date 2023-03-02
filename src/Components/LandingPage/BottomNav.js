import CommonNav from "../Common/CommonNav";
import Logo from "../../assets/designlogo.png"
import { Grid } from "@mui/material";
import "./fotter.css"

function BottomNav() {
  const pages = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Jobs",
      path: "employer/authentication",
    },
    {
      name: "Contact Us",
      path: "candidate/authentication",
    },
    {
      name: "Terms",
      path: "candidate/authentication",
    },
    {
      name: "Privacy Policy",
      path: "candidate/authentication",
    }
  ];
  return (
    
    // <CommonNav pages={pages} Logo={Logo} />
    <div className="footer-conatiner">
      <Grid container sm={8} xs={10} className= "footer-bar">
      {pages.map((page)=> {return <Grid item className="tab">{page.name}</Grid>} )}
    </Grid>
    </div>
    
  );
}
export default BottomNav;