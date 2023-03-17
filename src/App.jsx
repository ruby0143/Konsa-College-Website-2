import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdmissionPage from "./pages/admissionPage";
import CollegePage from "./pages/collegePage";
import ExamPage from "./pages/examPage";
import ForumPage from "./pages/forumPage";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import CollegeFooter from "./components/Footer/CollegeFooter";
import ScrollToTop from "./ScrollToTop"
import MainNavbar from "./components/Navbar/MainNavbar";
import AllColleges from "./pages/AllColleges";
import SchedularPage from "./pages/schedularPage";
import Err_404 from "./pages/err_404";
import Comming_Soon from "./pages/comming_soon";
import TrendAnalysis from "./pages/trendAnalysis";
import { useStateContext } from "./Context/useStateContext";
import CollegePredictor from "./pages/CollegePredictor";
import PercentilePredictor from "./pages/percentilePredictor";
import CutoffPage from "./pages/cutoffPage";
import ExamRecommender from "./pages/examRecommender";
import TrendsHome from "./pages/trendsHome";
import TrendsBranches from "./pages/trendsBranches";

function App() {
  const { skeleton, loader } = useStateContext()
  return (
    <>
      <Router>
        <ScrollToTop>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admission" element={<AdmissionPage />} exact />
            <Route path="/admin/:college" element={<CollegePage />} />
            <Route path="/college/:particularcollege" element={<CollegePage />} exact />
            <Route path="/news" element={<NewsPage />} exact />
            <Route path="/exams" element={<ExamPage />} exact />
            <Route path="/forum" element={<ForumPage />} exact />
            <Route path="/allColleges" element={<AllColleges />} exact />
            <Route path="/scheduler" element={<SchedularPage />} exact />
            <Route path="/trendsAnalysis" element={<TrendAnalysis />} exact />
            <Route path="/trends/:college" element={<TrendsBranches />} exact/>
            <Route path="/trends/:college/:branch" element={<TrendAnalysis />} exact />
            <Route path="/trends" element = {<TrendsHome />} exact />
            <Route path="*" element={<Err_404 />} exact />
            <Route path="/soon" element={<Comming_Soon />} exact />
            <Route path="/collegePredictor" element={<CollegePredictor />} exact />
            <Route path="/percentilePredictor" element={<PercentilePredictor />} exact />
            <Route path="/examRecommender" element={<ExamRecommender />} exact />
            <Route path="/college/:particularcollege/cutoff" element={<CutoffPage />} exact />
            <Route path="/tools" element={<Tools/>} exact/>
          </Routes>
          <CollegeFooter />
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
