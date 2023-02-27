import React, { useContext, useEffect, useState } from "react";
import CommonLastMessage from "../../Common/ChatComponents/CommonLastMessage";
import {userContext} from '../../../Context/userContext'
import {query,collection,where, onSnapshot} from 'firebase/firestore'
import {db} from '../../../FirebaseConfig'
function SideBar({ selectedLastMessage, selectedLastMessagefun }) {
  const [lastmessages, setLastmessages] = useState([
  ]);
  const [state,dispatch] = useContext(userContext);
  const fetchAllLastMessages = async () => {
    // fetch all last messages docs from last_messages collection where employerId is equal to current user id
    const employerId=state.user.email;
    const q =query(
      collection(db, "last_messages"),
      where("candidateId", "==", employerId)
    )
   await onSnapshot(q,(querySnapshot)=>{
      const lastmessages = [];
      querySnapshot.forEach((doc)=>{
        lastmessages.push(doc.data());
      })
      console.log(lastmessages);
      setLastmessages(lastmessages);
   })
  }
  useEffect(() => {
    fetchAllLastMessages();
  }, []);
  return (
    <CommonLastMessage
      lastmessages={lastmessages}
      selectedLastMessage={selectedLastMessage}
      selectedLastMessagefun={selectedLastMessagefun}
      userType="candidate"
    />
  );
}

export default SideBar;
