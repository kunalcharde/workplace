import { Divider, Grid, IconButton, TextField } from "@mui/material";
import moment from "moment";
import React, { useContext } from "react";
import { userContext } from "../../../Context/userContext";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box } from "@mui/system";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
function CommonTextArea({ selectedLastMessage, allConversations,sendMessage,userType,setMobileSidebaView }) {
 
  const [state, dispatch] = useContext(userContext);
  const [message, setMessage] = React.useState("");
  return (
    <div className="text-area-container">
      <div>
        <div
        onClick={()=>setMobileSidebaView(true)}
        ><ArrowBackRoundedIcon/></div>
        <div>{selectedLastMessage[userType==='employer'?'candidateName':'employerName']}</div>
        <div>{selectedLastMessage.jobTitle}</div>
      </div>
      <div className="text-area-message-container">
        {allConversations.map((conversation) => {
          return (
            <div
              style={{
                marginLeft:
                  conversation.userId === state.user.email ? "auto" : "0px",
                borderRadius:
                  conversation.userId === state.user.email
                    ? "16px 0px 16px 16px"
                    : "0px 16px 16px 16px",
              }}
            >
              <div>{conversation.message}</div>
              <div
                style={{
                  textAlign: "right",
                  fontSize: " clamp(10px, 1.1vw, 15px)",
                }}
              >
                {moment(conversation.createdAt.toDate())
                  .startOf("day")
                  .fromNow()}
              </div>
            </div>
          );
        })}
      </div>
      <div
        container
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <TextField
          size="small"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            fieldset: {
              borderRadius: "16px",
            },
          }}
        />

        <button
        
        onClick={()=>sendMessage(message,selectedLastMessage)}
        className="send-button">
          send
          <SendRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default CommonTextArea;
