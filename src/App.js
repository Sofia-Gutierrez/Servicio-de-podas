import "./assets/scss/App.scss"
import "./assets/scss/ObserverAnimations.scss"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
