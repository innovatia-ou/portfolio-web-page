import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Technologies } from "./pages/Technologies/Technologies";
import { Projects } from "./pages/Projects/Projects";

export default function App() {
  return (
    <>
      <Header />
      <>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Technologies" element={<Technologies />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </>
    </>
  );
}
