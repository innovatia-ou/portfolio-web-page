import "./App.scss";
import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Home />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
