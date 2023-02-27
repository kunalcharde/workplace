import React, { useState } from "react";
import CommonLastMessage from "../../Common/ChatComponents/CommonLastMessage";
function SideBar({selectedLastMessage, selectedLastMessagefun}) {
  const [lastmessages, setLastmessages] = useState([
    {
      candidateId: "sahil199926@gmail.com",
      candidateName: "Sahil jaryal",
      conversationKey: "9f2cdd5f-ea0c-467d-b6bf-411a15db65fd",
      createdAt: "Feb 23, 2023",
      employerId: "sahil@eonlint.com",
      employerName: "Eonlint",
      message:
        "hey Sahil jaryal, we have accepted your job application for SDE-4",
      lastMessageId: "9f2cdd5f-ea0c-467d-b6bf-411a15db65fd",
    },
    {
      candidateId: "shlok@gmai.com",
      candidateName: "shlok jaryal",
      conversationKey: "9f2cdd5f-ea0c-467d-b6bf-411a15db65fd",
      createdAt: "Feb 23, 2023 ",
      employerId: "sahil@eonlint.com",
      employerName: "Eonlint",
      message:
        "hey Sahil jaryal, we have accepted your job application for SDE-4",
      lastMessageId: "9f2cdd5f-ea0c-467d-b6bf-411a15ldb65fd",
    },
    {
      candidateId: "sahil199926@gmail.com",
      candidateName: "navneet",
      conversationKey: "9f2cdd5f-ea0c-467d-b6bf-411a15db65fd",
      createdAt: "Feb 23, 2023 ",
      employerId: "sahil@eonlint.com",
      employerName: "Eonlint",
      message:
        "hey Sahil jaryal, we have accepted your job application for SDE-4",
      lastMessageId: "9f2cdd5f-ea0c-467d-b6bf-411a15dppp5fd",
    },
    {
      candidateId: "sahil199926@gmail.com",
      candidateName: "shobhit jaryal",
      conversationKey: "9f2cdd5f-ea0c-467d-b6bf-411a15db65fd",
      createdAt: "Feb 23, 2023 ",
      employerId: "sahil@eonlint.com",
      employerName: "Eonlint",
      message:
        "hey Sahil jaryal, we have accepted your job application for SDE-4",
      lastMessageId: "9f2cdd5f-ea0c-467d-bplof-411a15db65fd",
    },
  ]);
  return <CommonLastMessage lastmessages={lastmessages}
  selectedLastMessage={selectedLastMessage}
  selectedLastMessagefun={selectedLastMessagefun}
  />;
}

export default SideBar;
