import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Universitet from "./Pages/Universitet";
import NotFound from "./Pages/NotFound";
import Loyihalar from "./Pages/Loyihalar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Yangiliklar from "./Pages/Yangiliklar";
import CoursesList from "./Pages/Maslahatlar/CoursesList";
import Boglanish from "./Pages/Boglanish";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Loyihalar" element={<Loyihalar />} />
        <Route path="/Oquv_markazlar" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Universitet" element={<Universitet />} />
        <Route path="/Yangiliklar" element={<Yangiliklar />} />
        <Route path="/Maslahatlar/courses_list" element={<CoursesList />} />
        <Route path="/Boglanish" element={<Boglanish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;