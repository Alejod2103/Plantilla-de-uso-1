import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar/Topbar.js';
import '../src/css/Style.css';
import Navbar from './Components/Navbar/Navbar.js';


function App() {
  return (
    <>

    <Router>

      <Topbar />
      <Navbar />
      

    </Router>
    
    </>
  );
}

export default App;
