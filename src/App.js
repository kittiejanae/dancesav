import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
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
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/teams" exact component={OurTeams} />
        <Route path="/classes" exact component={Schedule} />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/directions"
          component={() => {
            window.location =
              "https://www.google.com/maps/place/Dance+Savannah:+All-Star+Dance+Team/@32.0069873,-81.1356064,15z/data=!3m1!5s0x88fb0b3704919b4d:0x7edf0a3a2b34491c!4m10!1m2!2m1!1sDance+Savannah!3m6!1s0x88fb0b36fab79951:0xf1affafdf0e299f1!8m2!3d32.0069873!4d-81.117582!15sCg5EYW5jZSBTYXZhbm5haFoQIg5kYW5jZSBzYXZhbm5haJIBDGRhbmNlX3NjaG9vbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ2RrMVRSbGRCRUFF4AEA!16s%2Fg%2F11d_trxwtn";
            return null;
          }}
        />
        <Route
          path="/schedule"
          component={() => {
            window.location = "https://dance-savannah.square.site/classes";
            return null;
          }}
        />
        <Route
          path="/register"
          component={() => {
            window.location =
              "https://dance-savannah.square.site/23-24-tryouts-and-team";
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
        <Route
          path="/youtube"
          component={() => {
            window.location =
              "https://www.youtube.com/channel/UC6QKBJyuQg0XmzbMe-KFKHQ?app=desktop";
            return null;
          }}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
