import { Grid } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import TextArea from "./TextArea";
function EmployerConversation() {
  const [mobileSidebaView, setMobileSidebaView] = React.useState(true);
  const [selectedLastMessage, setSelectedLastMessage] = React.useState(null);

  const selectedLastMessagefun = (lastmessage) => {
    console.log(lastmessage);
    setSelectedLastMessage(lastmessage);
    setMobileSidebaView(false);
  }

  return (
    <Grid container>
      <Grid
        sx={{
          display: { xs: mobileSidebaView ? "block" : "none", md: "block" },
        }}
        item
        xs={12}
        md={3}
      >
        <SideBar
        selectedLastMessage={selectedLastMessage}
        selectedLastMessagefun={selectedLastMessagefun}
        />
      </Grid>
      <Grid
        sx={{
          display: { xs: mobileSidebaView ? "none" : "block", md: "block" },
        }}
        item
        xs={12}
        md={9}
      >
        <TextArea />
      </Grid>
    </Grid>
  );
}



export default EmployerConversation
