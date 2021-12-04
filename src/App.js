import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="right_wrap">
        <Navbar></Navbar>
      </div>
      <div className="left_wrap">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
