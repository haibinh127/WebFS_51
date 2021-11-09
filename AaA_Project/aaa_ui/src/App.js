import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
