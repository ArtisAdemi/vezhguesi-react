import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AuthProvider from "./hooks/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>

        {/* </Router> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
