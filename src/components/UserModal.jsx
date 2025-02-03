import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

function UserModal({ show, onHide }) {
  const [isSignUp, setIsSignUp] = useState(false);

  // Reset isSignUp to false when the modal is closed
  useEffect(() => {
    if (!show) {
      setIsSignUp(false); // Always start with Sign In when modal closes
    }
  }, [show]);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Modal show={show} onHide={onHide} centered className="rounded-4 shadow">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold text-center w-100">
          {isSignUp ? "Create Your Account" : "Welcome Back"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="text-center mb-3">
          <h5 className="text-muted">
            {isSignUp
              ? "Join us and explore amazing features!"
              : "Sign in to your account"}
          </h5>
        </div>
        {isSignUp ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                className="rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className="rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter your password"
                className="rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                className="rounded-pill"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-pill fw-bold"
            >
              Register
            </Button>
            <div className="mt-3 text-center">
              <small>
                Already have an account?{" "}
                <span
                  className="text-primary fw-bold cursor-pointer"
                  onClick={toggleMode}
                  style={{ cursor: "pointer" }}
                >
                  Sign In
                </span>
              </small>
            </div>
          </Form>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="rounded-pill"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className="rounded-pill"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-pill fw-bold"
            >
              Login
            </Button>
            <div className="mt-3 text-center">
              <small>
                Don't have an account?{" "}
                <span
                  className="text-primary fw-bold cursor-pointer"
                  onClick={toggleMode}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </small>
            </div>
          </Form>
        )}
        <div className="mt-4 text-center">
          <NavLink
            to="/admin"
            className="text-decoration-none fw-bold text-primary"
          >
            Admin Portal
          </NavLink>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;
