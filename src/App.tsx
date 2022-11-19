import "./App.css";
import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <main className="App">
      <Header />
      <Home />
    </main>
  );
}

export default App;
