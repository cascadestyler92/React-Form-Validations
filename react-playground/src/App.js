import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";

function App() {

return (
  <Router>

<Routes>

<Route exact path="/"element={<EmployeeDashboard/>}/>

</Routes>

</Router>

)
}

export default App;
