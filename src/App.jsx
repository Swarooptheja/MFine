import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home />
      <Footer /> */}
      <Signup />
      <Login />
    </div>
  );
}

export default App;
