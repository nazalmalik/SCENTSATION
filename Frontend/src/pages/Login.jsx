import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const [currentState, setCurrentState] = useState("Login"); // "login" or "signup"
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            if (currentState === 'Login') {

                const response = await axios.post(backendUrl + '/api/user/login', { email, password })
                if(response.data.success){
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }

            } else {
                const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
                if (response.data.success) {
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                } else {
                    toast.error(response.data.message)
                }

            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };

    useEffect(()=>{
        if (token){
            navigate('/')
        }
    },[token])

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient">
            <Card className="p-4 shadow-lg border-0 rounded-lg" style={{ width: "22rem", backgroundColor: "#ffffff" }}>
                <Form onSubmit={handleLogin}>
                    <h2 className="text-center mb-4">{currentState}</h2>
                    {currentState === "Login" ? "" : (
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
                    <Button
                        type="submit"
                        className="w-100 py-2"
                        variant="primary"
                        style={{ borderRadius: '30px', fontWeight: 'bold' }}
                    >
                        {currentState === "Login" ? "Login" : "Sign Up"}
                    </Button>
                </Form>
                <div className="text-center mt-4">
                    {currentState === "Login" ? (
                        <p>
                            Don't have an account?
                            <span
                                className="text-decoration-none text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={() => setCurrentState("Sign up")}
                            > Sign Up</span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?
                            <span
                                className="text-decoration-none text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={() => setCurrentState("Login")}
                            > Login</span>
                        </p>
                    )}
                    <p className="mt-2">
                        <Link to="/admin" className="text-decoration-none text-primary " style={{ marginTop: '10px' }}>Admin Portal</Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Login;