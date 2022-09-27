import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

// IMPORTED FILE 
import Textbar from "./Components/Textbar"

function App() {
  return (
    
    <div className="App">
      <ToastContainer/>
      <Textbar/>
    </div>
  );
}

export default App;
