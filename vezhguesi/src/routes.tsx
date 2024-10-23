import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./hooks/ProtectedRoute";
import MyReports from "./pages/MyReports";
import Signin from "./pages/Auth/Signin";
import Categories from "./pages/Categories";
import Bots from "./pages/Bots";
import Profile from "./pages/Profile";
import Tools from "./pages/Tools";
import Favorites from "./pages/Favorites";
import Singlebot from "./pages/Singlebot";
import SingleReport from "./pages/SingleReport";
import Signup from "./pages/Auth/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import PageLayout from "./components/PageLayout";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ForgotPw from "./pages/Auth/ForgotPw";
import ResetPassword from "./pages/Auth/ResetPassword";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["admin", "user"]}>
        <PageLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/bots",
        element: <Bots />,
      },
      {
        path: "/reports",
        element: <MyReports />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "singlebot",
        element: <Singlebot />,
      },
      {
        path: "/singlereport",
        element: <SingleReport />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify-signup/:token",
    element: <VerifyEmail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPw />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
]);

export default router;
