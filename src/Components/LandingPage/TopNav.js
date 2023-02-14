import CommonNav from "../Common/CommonNav";
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
    <CommonNav pages={pages} />
  );
}
export default TopNav;