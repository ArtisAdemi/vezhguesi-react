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
//import OrgPageLayout from "./components/org/OrgPageLayout";     IMPORT FOR ORG LAYOUT
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ForgotPw from "./pages/Auth/ForgotPw";
import ResetPassword from "./pages/Auth/ResetPassword";
import LandingPage from "./pages/LandingPage";
import Organizations from "./pages/Organizations";
import Settings from "./pages/Org/Settings";
import Members from "./pages/Org/Members";
import SingleOrganization from "./pages/Org/SingleOrganization";
import OrgProtectedRoute from "./hooks/OrgProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute allowedRoles={["admin", "user"]}>
        <PageLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "", // Relative path for the dashboard
        element: <Dashboard />,
      },
      {
        path: "categories", // Relative path for categories
        element: <Categories />,
      },
      {
        path: "bots", // Relative path for bots
        element: <Bots />,
      },
      {
        path: "reports", // Relative path for reports
        element: <MyReports />,
      },
      {
        path: "organizations",
        element: <Organizations />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "profile", // Relative path for profile
        element: <Profile />,
      },
      {
        path: "tools", // Relative path for tools
        element: <Tools />,
      },
      {
        path: "favorites", // Relative path for favorites
        element: <Favorites />,
      },
      {
        path: "singlebot", // Relative path for singlebot
        element: <Singlebot />,
      },
      {
        path: "reports/:entity_name", // Relative path for singlereport
        element: <SingleReport />,
      },
      {
        path: "admin", // Relative path for admin
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/o/:orgSlug", // Base path for organization
    element: (
      <OrgProtectedRoute>
        <SingleOrganization />
      </OrgProtectedRoute>
    ),
    children: [
      {
        path: "dashboard", // Nested route for dashboard
        element: <Dashboard />, // Render Dashboard component
      },
      {
        path: "settings", // Nested route for settings
        element: <Settings />, // Render Settings component
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "bots",
        element: <Bots />,
      },
      {
        path: "reports",
        element: <MyReports />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "tools",
        element: <Tools />,
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
]);

export default router;
