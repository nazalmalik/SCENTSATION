import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import "./Navbar.css";

import { ShopContext } from "../context/ShopContext";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "Dior Sauvage" },
  { id: 2, name: "YSL Black Opium" },
  { id: 3, name: "Tom Ford Noir" },
  { id: 4, name: "Versace Eros" },
  { id: 5, name: "Gucci Guilty" },
];

function CombinedNavbar() {
  const [user, setUser] = useState({ name: "John Doe" }); // Simulate a logged-in user
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Simulate user logout
    navigate("/"); // Redirect to home page after logout
  };

  const handleProfileClick = () => {
    if (!user) {
      navigate("/login"); // Navigate to login page if user is not logged in
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar-transparent fw-bold py-3 border-0">
        <Container fluid>
          {/* Left Section: Scentsation Logo */}
          <div className="d-flex align-items-center p-3">
            <h1 className="logo fw-bold m-0">Scentsation</h1>
          </div>

          {/* Center Section: Navigation Links */}
          <Navbar.Toggle aria-controls="navbar-content" className="border-0 text-light" />
          <Navbar.Collapse id="navbar-content">
            <Nav className="gap-4 nav-links" style={{ marginLeft: "130px", marginRight: "20px" }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/mens"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                Men's
              </NavLink>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                Women's
              </NavLink>
              <NavLink
                to="/unisex"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                Unisex
              </NavLink>
              <NavLink
                to="/giftsets"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                Giftsets
              </NavLink>
              
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-decoration-none ${isActive ? "active-link" : ""}`
                }
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          {/* Right Section: Floating Icons */}
          <div className="d-flex align-items-center gap-4 floating-icons">
            {/* Profile Icon */}
            {user ? (
              <NavDropdown
                title={<FaUser style={{ color: "#D2A44F", fontSize: "15px" }} />}
                id="profile-dropdown"
                align="end"
              >
                <NavDropdown.Item disabled>Welcome {user.name}</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/my-orders">
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div onClick={handleProfileClick} style={{ cursor: "pointer" }}>
                <FaUser style={{ color: "#D2A44F", fontSize: "15px" }} />
              </div>
            )}

            {/* Cart Icon */}
            <NavLink
              to="/addtocart"
              className="position-relative text-decoration-none d-inline-block"
            >
              <div className="position-relative">
                <FaShoppingCart style={{ color: "#D2A44F", fontSize: "20px" }} />
                <span
                  className="badge bg-orange text-white position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.75rem", transform: "translate(-50%, -50%)" }}
                >
                  {getCartCount()}
                </span>
              </div>
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default CombinedNavbar;