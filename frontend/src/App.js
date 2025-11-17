import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PlanBuilder from "./pages/PlanBuilder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plan-builder" element={<PlanBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
