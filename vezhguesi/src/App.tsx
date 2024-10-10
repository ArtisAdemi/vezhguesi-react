import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="App">
      <div>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
