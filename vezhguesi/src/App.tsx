import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageLayout from "./components/PageLayout";
import Bots from "./pages/Bots";
import Categories from "./pages/Categories";
import MyReports from "./pages/MyReports";
import Tools from "./pages/Tools";
import Favorites from "./pages/Favorites";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import Singlebot from "./pages/Singlebot";
import Signin from "./pages/Signin";
import SingleReport from "./pages/SingleReport";
import { UserProvider } from "./context/UserContext";



function AppContent() {
  const location = useLocation();

  return (
    <div className="">
      {location.pathname !== "/signup" && location.pathname !== "/verify-signup/"}

      <div className={` ${location.pathname === "/signup" || location.pathname === "/verify-signup" ? "pl-0 pt-0" : ""}`}>

        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="bots" element={<Bots />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/bots" element={<Bots />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/reports" element={<MyReports />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/singlebot" element={<Singlebot />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/singlereport" element={<SingleReport />} />

            <Route path="/verify-signup/:token" element={<VerifyEmail />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
