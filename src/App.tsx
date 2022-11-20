import "./App.scss";
import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/about/About";

function App() {
  return (
    <main className="App">
      <Header />
      {/* <Home /> */}
      <About />
      <footer></footer>
    </main>
  );
}

export default App;
