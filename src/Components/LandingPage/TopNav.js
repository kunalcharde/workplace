import CommonNav from "../Common/CommonNav";
import Logo from "../..//assets/logo.png";
function TopNav() {
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Find Candidates",
      path: "employer/authentication",
    },
    {
      name: "Find Jobs",
      path: "candidate/authentication",
    }
  ];
  return (
    <CommonNav pages={pages} Logo={Logo}/>
  );
}
export default TopNav;