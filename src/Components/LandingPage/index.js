import React from "react";
import TopNav from "./TopNav";
import RightJobSection from "./RightJobSection";
import FeedbackCard from "./FeedbackCard";
import ManySolutoinSection from "./ManySolutionSection";
import { Button} from "@mui/material";
import landing from "../../assets/landingpg.png"
import { useNavigate } from "react-router-dom";
import FooterNav from "./FooterNav";
function Landingpage() {
  const navigation = useNavigate()
  return (
    <div>
      <TopNav />
      <RightJobSection />
      <ManySolutoinSection />
      <FeedbackCard />
      <div className="see-more">
        <Button
          variant="outlined"
          onClick ={()=>{navigation("candidate/authentication")}}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Find More Job
        </Button>
      </div>
      <div className="landing-img">
          <img src= {landing} alt="img" />
      </div>
      <FooterNav/>
    </div>
  );
}

export default Landingpage;
