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


function App() {

  return (
  <>
  <Router>
  <ScrollToTop>
  <MainNavbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/admission" element={<AdmissionPage/>} />
      <Route path="/college/:particularcollege" element={<CollegePage/>} />
      <Route path="/news" element={<NewsPage/>} />
      <Route path="/exams" element={<ExamPage/>} />
      <Route path="/forum" element={<ForumPage/>} />
      <Route path="/tools" element={<ToolsPage/>} />
      <Route path="/allColleges" element={<AllColleges/>} /> 
    </Routes>

    <CollegeFooter/>
  </ScrollToTop>
  </Router>
  </>
  )
}

export default App
