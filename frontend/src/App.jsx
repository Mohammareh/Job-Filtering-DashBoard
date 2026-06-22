import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Jobs } from "./pages/Jobs";
import { NavBar } from "./components/NavBar";
import { JobPage } from "./pages/JobPage";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter className="">
      <NavBar />
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:searched" element={<Jobs />} />
        <Route path="/job/:jobId" element={<JobPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
