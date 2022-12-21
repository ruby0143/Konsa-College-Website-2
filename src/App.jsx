import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import AdmissionPage from "./pages/admissionPage";
import CollegePage from "./pages/collegePage";
import ExamPage from "./pages/examPage";
import ForumPage from "./pages/forumPage";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import ToolsPage from "./pages/toolsPage";
import {Footer} from "./components/Footer/footer"

function App() {

  return (
  <>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/admission" element={<AdmissionPage/>} />
      <Route path="/college-finder" element={<CollegePage/>} />
      <Route path="/news" element={<NewsPage/>} />
      <Route path="/exams" element={<ExamPage/>} />
      <Route path="/forum" element={<ForumPage/>} />
      <Route path="/tools" element={<ToolsPage/>} />
    </Routes>
    <Footer/>
  </Router>
  </>
  )
}

export default App
