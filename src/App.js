import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import OurTeams from "./pages/OurTeams";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOPen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOPen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/teams" exact component={OurTeams} />
        <Route path="/classes" exact component={Schedule} />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/directions"
          component={() => {
            window.location =
              "https://www.google.com/maps/dir/31.9904574,-81.1526968/Dance+Savannah:+All-Star+Dance+Team,+14045+Abercorn+St+Suite+1526,+Savannah,+GA+31419/@31.986467,-81.1719082,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88fb0b36fab79951:0xf1affafdf0e299f1!2m2!1d-81.1726396!2d31.9843158";
            return null;
          }}
        />
        <Route
          path="/schedule"
          component={() => {
            window.location = "https://dance-savannah.square.site";
            return null;
          }}
        />
        <Route
          path="/facebook"
          component={() => {
            window.location =
              "https://m.facebook.com/Dance-Savannah-1681392418821899/";
            return null;
          }}
        />
        <Route
          path="/instagram"
          component={() => {
            window.location =
              "https://www.instagram.com/dancesavannah912/?hl=en";
            return null;
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
