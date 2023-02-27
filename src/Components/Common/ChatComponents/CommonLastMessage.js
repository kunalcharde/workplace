import { Divider, Grid } from "@mui/material";
import React from "react";
import "./chatecomponent.css";
function CommonLastMessage({
  lastmessages,
  selectedLastMessage,
  selectedLastMessagefun,
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
              item
              xs={12}
              onClick={() => selectedLastMessagefun(lastmessage)}
            >
              <div
                className="info"
              
              >
                <h4>{lastmessage.candidateName}</h4>
                <h5>{lastmessage.createdAt}</h5>
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
