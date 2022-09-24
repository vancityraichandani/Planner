import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop:100}}>
        <Home />
      </div>
    </div>
  );
}

export default App;
