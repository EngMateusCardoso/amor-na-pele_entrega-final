import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Links from "./pages/Links";
import Parceiros from "./pages/Parceiros";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cadastro" element={<Cadastro />}></Route>
          <Route path="/Contato" element={<Contato />}></Route>
          <Route path="/Links" element={<Links />}></Route>
          <Route path="/Parceiros" element={<Parceiros />}></Route>
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
