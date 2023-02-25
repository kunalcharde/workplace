import React from 'react'
import CommonNav from '../Components/Common/CommonNav';

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
    <CommonNav pages={pages} />
  );
}

export default EmployerNavbar