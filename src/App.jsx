import "./App.css";
import { JobOffer } from "./components/JobOffer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="overflow-y-auto">
      <NavBar />
      <JobOffer />
    </div>
  );
}

export default App;
