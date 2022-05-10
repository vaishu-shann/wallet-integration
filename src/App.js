import './App.css';
import {
  BrowserRouter as Router, 
	Route,
	Routes,
} from "react-router-dom";
import Home from './components/home';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element= {<Home/>}  />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
