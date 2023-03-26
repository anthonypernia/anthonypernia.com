import { useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.scss";
import NavBarItem from "./NavBarItem";
import logo from "@assets/logo-anthony/anthony-pernia-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("HOME");

  const handleItemClick = (e) => {
    setActiveItem(e.target.innerText);
  };

  let items = [
    { name: "HOME", active: true },
    { name: "ANTHONY PERNIA", active: false },
    { name: "PROJECTS", active: false },
    { name: "CONTACT", active: false },
  ];

  return (
    <Navbar  expand="lg" className={styles.Navbar} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} className={styles.NavbarBrandImage} alt="Anthony Pernia" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
            {items.map((item) => (
                <NavBarItem
                    key={item.name}
                    item={item}
                    activeItem={activeItem}
                    handleItemClick={handleItemClick}
                />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
