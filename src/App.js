import "./App.scss";
import {useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    Aos.init();
    
  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
