
import './App.css';
import { Routes, Route} from "react-router-dom";
import Landing from './components/Landing.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/2" element={<h1>2nd page </h1>}/>
      <Route path="/3" element={<h1>third page </h1>}/>
      <Route path="*" element={<h1>Error page go home</h1>}/>
    </Routes>
    </>
  );
}

export default App;
