import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;