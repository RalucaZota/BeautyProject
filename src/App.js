// import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
