import "./App.scss";
import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
