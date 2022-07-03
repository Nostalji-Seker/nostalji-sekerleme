import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import GalerySlider from "./pages/GalerySlider";
import Events from "./pages/Events";
// import Instagram from "./pages/Instagram";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/gallery">
            <Gallery setSelectedProduct={setSelectedProduct} />
          </Route>
          <Route path="/galerySlider">
            <GalerySlider
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </Route>
          <Route path="/events" component={Events} />
          {/* <Route path="/instagram" component={Instagram} /> */}
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
