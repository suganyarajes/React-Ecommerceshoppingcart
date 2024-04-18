import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
//import './index.css';
//import '/styles.css'
import './App.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    
  </Router>
);
