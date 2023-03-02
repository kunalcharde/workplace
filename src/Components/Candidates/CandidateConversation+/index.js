import { Grid } from "@mui/material";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { db } from "../../../FirebaseConfig";
import SideBar from "./SideBar";
import TextArea from "./TextArea";

import {v4 as uuidv4 } from "uuid";
import { userContext } from "../../../Context/userContext";
function CandidateConversation() {
  const [state, dispatch] = useContext(userContext);
  const [mobileSidebaView, setMobileSidebaView] = React.useState(true);
  const [allConversations, setAllConversations] = React.useState([]);
  const [selectedLastMessage, setSelectedLastMessage] = React.useState(null);

  const selectedLastMessagefun = (lastmessage) => {
    console.log(lastmessage);
    setSelectedLastMessage(lastmessage);
    setMobileSidebaView(false);
  };
  useEffect(() => {
    if (selectedLastMessage) {
      // call firestore conversation collection
      // with conversationkey from last message
      // return all conversation doc where conversationkey is equal to conversationkey
      // add a onSnapshot listener to the collection
      const q = query(
        collection(db, "conversations"),
        where("conversationKey", "==", selectedLastMessage.conversationKey)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let allConversations = [];
        querySnapshot.forEach((doc) => {
          allConversations.push({ ...doc.data() });
        });
        allConversations.sort((a, b) => {
          return a.createdAt.toDate() - b.createdAt.toDate();
        })
        setAllConversations(allConversations);
        console.log(allConversations);
      });
    }
  }, [selectedLastMessage]);
  const sendMessage = async (message) => {
    // update the last message in the conversation collection
if(message!="")
   { try{
    const lastmessageId = selectedLastMessage.lastMessageId;
    await setDoc(
      doc(db, "last_messages", lastmessageId),
      {
        message: message,
      },
      {
        merge: true,
      }
    );

    // add a new document to the conversation collection
    const conversationKey = selectedLastMessage.conversationKey;
      const convId= uuidv4()
    await setDoc(doc(db, "conversations",convId), {
      conversationKey: conversationKey,
      message: message,
      userId:state.user.email,
      createdAt: new Date(),
      convId
    })
    }
    catch(err){
      console.log(err);
     
    }
  };}

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
        <TextArea
          sendMessage={sendMessage}
          allConversations={allConversations}
          selectedLastMessage={selectedLastMessage}
          setMobileSidebaView={setMobileSidebaView}
        />
      </Grid>
    </Grid>
  );
}


export default CandidateConversation
