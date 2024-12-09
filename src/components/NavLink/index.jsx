import React from "react"
import { Link, useLocation } from "react-router-dom"

const NavLink = ({ to, children, className = "" }) => {
  const location = useLocation()

  // Ajouter la classe active si la route correspond
  const isActive = location.pathname === to ? "active" : ""

  return (
    <Link className={`${className} ${isActive}`} to={to}>
      {children}
    </Link>
  )
}

export default NavLink
