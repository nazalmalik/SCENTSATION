import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";

const Auth = () => {
  const [currentState, setCurrentState] = useState("login"); // "login" or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    console.log("Login attempt with", email, password);
    localStorage.setItem("userEmail", email);
    navigate("/");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !phone) {
      setError("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (!/^\d{10,15}$/.test(phone)) {
      setError("Invalid phone number");
      return;
    }

    console.log("Signup attempt with", name, email, password, phone);
    localStorage.setItem("userEmail", email);
    navigate("/");
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient">
      <Card className="p-4 shadow-lg border-0 rounded-lg" style={{ width: "22rem", backgroundColor: "#ffffff" }}>
        <h2 className="text-center mb-4">{currentState === "login" ? "Login" : "Sign Up"}</h2>
        {error && <p className="text-danger text-center mb-3">{error}</p>}
        <Form onSubmit={currentState === "login" ? handleLogin : handleSignup}>
          {currentState === "signup" && (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </Form.Group>
          {currentState === "signup" && (
            <Form.Group className="mb-3">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter your phone number"
              />
            </Form.Group>
          )}
          <Button 
            type="submit" 
            className="w-100 py-2" 
            variant="primary" 
            style={{ borderRadius: '30px', fontWeight: 'bold' }}
          >
            {currentState === "login" ? "Login" : "Sign Up"}
          </Button>
        </Form>
        <div className="text-center mt-4">
          {currentState === "login" ? (
            <p>
              Don't have an account? 
              <span 
                className="text-decoration-none text-primary" 
                style={{ cursor: "pointer" }} 
                onClick={() => setCurrentState("signup")}
              > Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account? 
              <span 
                className="text-decoration-none text-primary" 
                style={{ cursor: "pointer" }} 
                onClick={() => setCurrentState("login")}
              > Login</span>
            </p>
          )}
          <p className="mt-2">
            <Link to="/admin" className="text-decoration-none text-primary " style={{marginTop:'10px'}}>Admin Portal</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
