import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import "./main.css";
import Home from "./pages/Home";
import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound"
import Singleproduct from "./pages/SingleProduct";

function App() {
  return (
    
    <div>
      
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products/:productId" element={<Singleproduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;