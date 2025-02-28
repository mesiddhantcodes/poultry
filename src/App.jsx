import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./pages/component/Header";
import About from "./pages/component/About";
import Footer from "./pages/component/Footer";
import Journey from "./pages/Journey";
import Director from "./pages/Director";
import Mission from "./pages/Mission";
import WhyChooseUs from "./pages/WhyChooseUs";
import Poultry from "./pages/Poultry";
import Integration from "./pages/Integration";
import IntegrationBihar from "./pages/IntegrationBihar";
import IntegrationJharkhand from "./pages/IntegrationJharkhand";
import IntegrationUp from "./pages/IntegrationUp";
import Broiler from "./pages/Broiler";
import Layer from "./pages/Layer";
import Feeder from "./pages/Feeder";
import Layerproduct from "./pages/Layerproduct";
import BroilerProduct from "./pages/BroilerProduct";
import BreederProduct from "./pages/BreederProduct";
import ContactForm from "./pages/ContactForm";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/director" element={<Director />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />

        <Route path="/poultry-division" element={<Poultry />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/integration/bihar" element={<IntegrationBihar />} />

        <Route path="/integration/jharkhand" element={<IntegrationJharkhand />} />
        <Route path="/integration/uttar-pradesh" element={<IntegrationUp />} />
        <Route path="/poultry-division/broiler" element={<Broiler />} />
        <Route path="/poultry-division/layer" element={<Layer />} />
        <Route path="/poultry-division/feeder" element={<Feeder />} />
        <Route path="/layer-feed" element={<Layerproduct />} />
        <Route path="/broiler-feed" element={<BroilerProduct />} />
        <Route path="/breeder-feed" element={<BreederProduct />} />
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
