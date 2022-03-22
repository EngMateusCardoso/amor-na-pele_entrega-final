import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Newsletter from "./Components/Newsletter/Newsletter";

import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Contato from "./pages/Contato/Contato";
import Links from "./pages/Links/Links";
import Parceiros from "./pages/Parceiros/Parceiros";
import Login from "./pages/Login/Login";

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
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
