import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdmissionPage from "./pages/admissionPage";
import CollegePage from "./pages/collegePage";
import ExamPage from "./pages/examPage";
import ForumPage from "./pages/forumPage";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import ToolsPage from "./pages/toolsPage";
import CollegeFooter from "./components/Footer/CollegeFooter";
import ScrollToTop from "./ScrollToTop"
import MainNavbar from "./components/Navbar/MainNavbar";
import AllColleges from "./pages/AllColleges";
import SchedularPage from "./pages/schedularPage";


function App() {

  return (
  <>
  <Router>
  <ScrollToTop>
  <MainNavbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/admission" element={<AdmissionPage/>} exact/>
      <Route path="/college/:particularcollege" element={<CollegePage/>} exact/>
      <Route path="/news" element={<NewsPage/>} exact/>
      <Route path="/exams" element={<ExamPage/>} exact/>
      <Route path="/forum" element={<ForumPage/>} exact/>
      <Route path="/tools" element={<ToolsPage/>} exact/>
      <Route path="/allColleges" element={<AllColleges/>} exact/> 
      <Route path="/schedular" element={<SchedularPage/>} exact/> 
    </Routes>
    <CollegeFooter/>
  </ScrollToTop>
  </Router>
  </>
  )
}

export default App
