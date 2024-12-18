import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AuthProvider from "./hooks/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserOrgRoleProvider } from './hooks/UserOrgRoleProvider';

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserOrgRoleProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </UserOrgRoleProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
