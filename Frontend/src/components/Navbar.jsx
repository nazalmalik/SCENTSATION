import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../context/ShopContext";
import { FaUser, FaShoppingCart } from "react-icons/fa";

function CombinedNavbar() {
  const [user, setUser] = useState({ name: "John Doe" }); // Simulate a logged-in user
  const { getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setUser(null); // Simulate user logout
    navigate("/login");
  };

  const handleProfileClick = () => {
    if (!token) {
      navigate("/login"); // Navigate to login page if user is not logged in
    }
  };

  return (
    <Navbar expand="lg" className="navbar-transparent fw-bold py-3 border-0">
      <Container fluid className="justify-content-center">
        {/* Left Section: Scentsation Logo */}
        <div className="d-flex align-items-center p-3">
          <h1 className="logo fw-bold m-0">Scentsation</h1>
        </div>

        {/* Center Section: Navigation Links */}
        <Navbar.Toggle aria-controls="navbar-content" className="border-0 text-light" />
        <Navbar.Collapse id="navbar-content" className="justify-content-center">
          <Nav className="gap-4 nav-links">
            {["/", "/about", "/mens", "/women", "/unisex", "/giftsets", "/contact"].map((path, index) => {
              const labels = ["Home", "About", "Men's", "Women's", "Unisex", "Giftsets", "Contact"];
              return (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) => `nav-link text-decoration-none ${isActive ? "active-link" : ""}`}
                >
                  {labels[index]}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>

        {/* Right Section: Floating Icons */}
        <div className="d-flex align-items-center gap-4 floating-icons">
          {/* Profile Icon */}
          {token ? (
            <NavDropdown
              title={<FaUser style={{ color: "#D2A44F", fontSize: "15px" }} />}
              id="profile-dropdown"
              align="end"
            >
              <NavDropdown.Item disabled>Welcome {user?.name}</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/orders">
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
          <NavLink to="/addtocart" className="position-relative text-decoration-none d-inline-block">
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
  );
}

export default CombinedNavbar;
