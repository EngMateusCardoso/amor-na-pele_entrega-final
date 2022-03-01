import React from "react";

import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";
//import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Logo from "../img/logo_menu.png";

/*
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Parceiros from "../pages/Parceiros";
import Contato from "../pages/Contato";
import Links from "../pages/Links";
import Login from "../pages/Login";
*/

export default (props) => {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="navbar">
      <Navbar color="transparent" light expand="md" width="100%">
        <NavbarBrand href="/">
          <img
            height="75px"
            className="img-responsive"
            src={Logo}
            alt="logotipo da ONG Amor na Pele"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink class="menu" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" to="/cadastro">
                Cadastro
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" to="/parceiros">
                Parceiros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" to="/contato">
                Contato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" to="/links">
                Links
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

/*
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/links" element={<Links />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
*/
