import React from 'react'
import CommonNav from '../Components/Common/CommonNav';
import logo from "../assets/logo.png"
function EmployerNavbar() {
  const pages = [
    {
      name: "Jobs",
      path: "/employer/job",
    },
    {
      name: "Applicants",
      path: "/employer/application",
    },
    {
      name: "Conversation",
      path: "employer/conversation",
    },
    {
      name: "Profile",
      path: "/employer/profile",
    }
  ];
  return (
    <CommonNav pages={pages} Logo={logo} />
  );
}

export default EmployerNavbar