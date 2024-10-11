import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageLayout from "./components/PageLayout";
import Bots from "./pages/Bots";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <PageLayout />
          <div className="pl-[280px] pt-[110px]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bots" element={<Bots />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
