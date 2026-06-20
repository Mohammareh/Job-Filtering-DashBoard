import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Jobs } from "./pages/Jobs";
import { NavBar } from "./components/NavBar";
import { JobPage } from "./pages/JobPage";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:jobId" element={<JobPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
