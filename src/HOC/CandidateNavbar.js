import React from 'react'
import CommonNav from '../Components/Common/CommonNav';
import logo from "../assets/logo.png"
function CandidateNavbar() {
  const pages = [
    {
      name: "Jobs",
      path: "/candidate/jobs",
    },
    {
      name: "Applications",
      path: "/candidate/application",
    },
    {
      name: "Conversation",
      path: "/candidate/conversation",
    },
    {
      name: "Profile",
      path: "/candidate/profile",
    }
  ];
  return (
    <CommonNav pages={pages} Logo={logo} />
  );
}

export default CandidateNavbar