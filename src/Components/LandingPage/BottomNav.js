import CommonNav from "../Common/CommonNav";
import Logo from "../../assets/designlogo.png"
function BottomNav() {
  const pages = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Jobs",
      path: "employer/authentication",
    },
    {
      name: "Contact Us",
      path: "candidate/authentication",
    },
    {
      name: "Terms",
      path: "candidate/authentication",
    },
    {
      name: "Privacy Policy",
      path: "candidate/authentication",
    }
  ];
  return (
    <CommonNav pages={pages} Logo={Logo} />
  );
}
export default BottomNav;