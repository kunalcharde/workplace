//importing some libraries and functions or constatns
import React from 'react'
import { BrowserRouter,Routes,Route,Navigate,Outlet} from 'react-router-dom';

//Authentication
import Authentication from '../Components/Authentication';

// Landing Page
import LandingPage from '../Components/LandingPage';
// candidates components
import CandidateApplication from '../Components/Candidates/CandidateApllicatiom';
import CandidateConversation from '../Components/Candidates/CandidateConversation+';
import CandidateJobs from '../Components/Candidates/CandidateJobs';
import CandidateOnboarding from '../Components/Candidates/CandidateOnboarding';
import CandidateProfile from '../Components/Candidates/CandidateProfile';

// Employer Components
import EmployerOnboarding from '../Components/Employers/EmployerOnboarding';
import EmployerProfile from '../Components/Employers/EmployerProfile';
import EmployerConversation from '../Components/Employers/EmployerConversation'
import EmployerJobs from '../Components/Employers/EmployerJobs'
import EmployerApplication from '../Components/Employers/EmployerApplication'
const NavRoutes = () => {

  const ProtectedCandidate= ()=>{
    if(false){
      return <Outlet/>
    }
    else {
     return  <Navigate to="/candidate/authentication"/>
    }
  }
  const ProtectedEmployer= ()=>{
    if(false){
      return <Outlet/>
    }
    else {
      return <Navigate to="/employer/authentication"/>
    }
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage/>} />
        <Route path={"/candidate/authentication"} element={<Authentication/>}/>
        <Route element={<ProtectedCandidate/>}>
          <Route path="/candidate/Application" element={<CandidateApplication/>}/>
          <Route path="/candidate/onboarding" element={<CandidateOnboarding/>}/>
          <Route path="/candidate/profile" element={<CandidateProfile/>}/>
          <Route path="/candidate/jobs" element={<CandidateJobs/>}/>
          <Route path="/candidate/conversation" element={<CandidateConversation/>}/>
        </Route>
        <Route path={"/employer/authentication"} element={<Authentication/>}/>
        <Route element={<ProtectedEmployer/>}>
            <Route path="/employer/application" element= {<EmployerApplication/>}/>
            <Route path="/employer/onboarding" element= {<EmployerOnboarding/>}/>
            <Route path="/employer/profile" element= {<EmployerProfile/>}/>
            <Route path="/employer/jobs" element= {<EmployerJobs/>}/>
            <Route path="/package-lock.jsonemployer/conversation" element= {<EmployerConversation/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavRoutes

// path / is the landing page
// path candidate/auth is the candidate auth page
// path candidate/onboarding is the candidate onboarding page
// path candidate/profile is the candidate profile page
// path candidate/jobs is the candidate jobs page
// path candidate/applications is the candidate applications page
// path candidate/conversation is the candidate conversation page

// path employer/auth is the employer auth page
// path employer/onboarding is the employer onboarding page
// path employer/profile is the employer profile page
// path employer/jobs is the employer jobs page
// path employer/applications is the employer applications page
// path employer/conversation is the employer conversation page
