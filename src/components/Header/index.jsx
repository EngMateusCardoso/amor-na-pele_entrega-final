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

const Header = (props) => {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink className="menu text-white" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu text-white" href="/cadastro">
                Cadastro
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu text-white" href="/Parceiros">
                Parceiros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu text-white" href="/Contato">
                Contato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu text-white" href="/Links">
                Links
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;