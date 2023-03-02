import { Grid } from "@mui/material";
import "./fotter.css";

function BottomNav() {
  const pages = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Jobs",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/",
    },
    {
      name: "Terms",
      path: "/",
    },
    {
      name: "Privacy Policy",
      path: "/",
    },
  ];
  return (
    <div className="footer-conatiner">
      <Grid container sm={8} xs={10} className="footer-bar">
        {pages.map((page) => {
          return (
            <Grid item className="tab">
              {page.name}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default BottomNav;
