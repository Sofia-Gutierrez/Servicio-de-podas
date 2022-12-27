import "./assets/scss/App.scss"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
