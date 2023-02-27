import { Divider, Grid } from "@mui/material";
import moment from "moment";
import React from "react";
import "./chatecomponent.css";
function CommonLastMessage({
  lastmessages,
  selectedLastMessage,
  selectedLastMessagefun,
  userType
}) {
  return (
    <Grid
      sx={{
        padding: "0px 10px",
      }}
      container
    >
      {lastmessages.map((lastmessage) => {
        return (
          <>
            <Grid
              className={`side-card-container ${
                selectedLastMessage&& selectedLastMessage.lastMessageId ===
                  lastmessage.lastMessageId && "selected"
              }`}
              key={lastmessage.lastMessageId}
              item
              xs={12}
              onClick={() => selectedLastMessagefun(lastmessage)}
            >
              <div
                className="info"
              
              >
                <h4>{lastmessage[userType==='employer'?'candidateName':'employerName']}</h4>
                <h5>{moment(lastmessage.createdAt.toDate()).startOf("day").fromNow()}</h5>
              </div>
              <h6>{lastmessage.message}</h6>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}

export default CommonLastMessage;
