import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Todolist></Todolist>
      
      {/* <Usee /> */}
    </div>
  );
}

export default App;
