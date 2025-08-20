import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import ProjectExample from "./components/projectExample";
import Footer from "./components/footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <ProjectExample />
    <Contact />
    <Footer />
  </StrictMode>
);
