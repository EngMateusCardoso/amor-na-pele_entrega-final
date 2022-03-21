import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Home from "../src/Pages/Home/Home";
import Cadastro from "../src/Pages/Cadastro/Cadastro";
import Contato from "../src/Pages/Contato/Contato";
import Links from "../src/Pages/Links/Links";
import Parceiros from "../src/Pages/Parceiros/Parceiros";
import Login from "../src/Pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";


ReactDOM.render(
<React.StrictMode>
    <Header></Header>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Cadastro" element={<Cadastro/>}></Route>
            <Route path="/Contato" element={<Contato/>}></Route>
            <Route path="/Links" element={<Links/>}></Route>
            <Route path="/Parceiros" element={<Parceiros/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
</Router>
</React.StrictMode>,
document.getElementById("root")
);
