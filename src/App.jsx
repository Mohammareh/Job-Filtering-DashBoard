import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Jobs } from "./pages/Jobs";
import { NavBar } from "./components/NavBar";
import { Job } from "./components/Job";
import { JobPage } from "./pages/JobPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:jobId" element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
