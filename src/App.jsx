import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./pages/component/Header";
import About from "./pages/component/About";
import Footer from "./pages/component/Footer";
import Journey from "./pages/Journey";
import Director from "./pages/Director";
import Mission from "./pages/Mission";
import WhyChooseUs from "./pages/WhyChooseUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />}

        />
        <Route path="/director" element={<Director />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
