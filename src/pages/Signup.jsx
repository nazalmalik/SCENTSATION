import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // New state for name
  const [phone, setPhone] = useState(""); // New state for phone number
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password || !confirmPassword || !name || !phone) {
      setError("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Removed phone validation, allowing any input
    if (!phone) {
      setError("Phone number is required");
      return;
    }

    console.log("Signup attempt with", name, email, phone, password);

    // Simulate a successful signup here (e.g., send data to the server)
    // If everything is okay, redirect to the Login page
    navigate("/login"); // Redirect to the Login page after successful signup
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-4">
      <Card className="w-50 max-w-md p-4 shadow-xl rounded-lg" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
        <Card.Body>
          <h2 className="text-center mb-4 text-primary" style={{ fontSize: '2rem', fontWeight: '600' }}>Create an Account</h2>
          {error && <p className="text-danger text-center mb-3">{error}</p>}
          <Form onSubmit={handleSignup}>
            {/* Name Field */}
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Full Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="input-style"
              />
            </Form.Group>

            {/* Phone Field */}
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter your phone number"
                className="input-style"
              />
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="input-style"
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="input-style"
              />
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
                className="input-style"
              />
            </Form.Group>

            {/* Sign Up Button */}
            <Button 
              type="submit" 
              className="w-50 mx-auto py-2 mb-3 btn-submit d-block mt-4" 
              variant="primary"
            >
              Sign Up
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p className="mb-1">
              Already have an account? <Link to="/login" className="text-decoration-none text-primary">Login</Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
