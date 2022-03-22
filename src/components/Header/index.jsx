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
import Logo from "../../assets/img/logo_menu.png";

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
              <NavLink class="menu" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" href="/cadastro">
                Cadastro
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" href="/Parceiros">
                Parceiros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" href="/Contato">
                Contato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" href="/Links">
                Links
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink class="menu" href="/Login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
