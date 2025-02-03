import React from "react";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
      {/* Heading Section */}
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="mb-3" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            Get in Touch
          </h1>
          <p className="text-muted">
            Whether you're curious about a product or need support, we’re here to help.
          </p>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej-1280x720.png"
            alt="Contact Us"
            fluid
            rounded
            style={{ maxWidth: "100%" , marginRight:'40px'}}
          />
        </Col>
        <Col md={5}>
          <Form style={{marginTop:'20px'}}>
            <h2 className="mb-4" style={{ fontWeight: "bold", marginTop:'30px',textAlign:'center',marginBottom:'30px' }}>
              Contact Form
            </h2>
            <Form.Group className="mb-3" controlId="formName" >
              <Form.Label><strong>Full Name</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label><strong>Email Address</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label><strong>Message</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message here"
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-50" style={{ borderRadius: "10px" }}>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row className="py-5 bg-light">
        <Col md={4} className="text-center">
          <Card className="shadow-sm p-4">
            <Card.Body>
              <i className="bi bi-shield-lock-fill" style={{ fontSize: "2rem", color: "#343a40" }}></i>
              <h5 className="mt-3">Secure Shopping</h5>
              <p className="text-muted">
                Your data and transactions are always safe with us.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="shadow-sm p-4">
            <Card.Body>
              <i className="bi bi-gift-fill" style={{ fontSize: "2rem", color: "#343a40" }}></i>
              <h5 className="mt-3">Exclusive Offers</h5>
              <p className="text-muted">
                Discover premium perfumes at unbeatable prices.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card className="shadow-sm p-4">
            <Card.Body>
              <i className="bi bi-people-fill" style={{ fontSize: "2rem", color: "#343a40" }}></i>
              <h5 className="mt-3">Customer Support</h5>
              <p className="text-muted">
                Reach out to our team for any assistance.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Map Section */}
      <Row className="mt-5">
        <Col>
          <h3 className="text-center mb-4">Visit Our Office</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090446!2d144.9556513153183!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57742218b1e4d9!2sFederation+Square!5e0!3m2!1sen!2sau!4v1614096275768!5m2!1sen!2sau"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
