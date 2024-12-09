import React from "react"
import NavLink from "../NavLink"
import logo_IS from "../../assets/logo_IS.webp"

const Header = () => {
  return (
    <header className="Header">
      <img src={logo_IS} className="Header__logo" alt="logo Ingrid" />
      <nav className="Header__nav">
        <NavLink className="Header__link" to="/">
          Présentation
        </NavLink>
        <NavLink className="Header__link link_2nd-color" to="/competences">
          Compétences
        </NavLink>
        <NavLink className="Header__link" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="Header__link link_2nd-color" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
