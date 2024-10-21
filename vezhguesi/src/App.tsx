import "./App.css";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes";
import AuthProvider from "./hooks/AuthProvider";


function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;
