import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-muted" style={{backgroundColor:'#1D3243' }}>
      {/* Footer Sections */}
      <section >
        <Container className="text-center text-md-start mt-5" style={{marginTop:'60px'}}>
          <Row className="mt-3" >
            {/* About Scentsation */}
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4" style={{ color:'#D2A44F'}}>
              <h6 className="text-uppercase fw-bold mb-4 fs-8"style={{marginTop:'80px',fontSize:'2.3rem'}}>
                
                Scentsation
              </h6>
              <p>
               Finest selection of perfumes discover your signature scent with a touch of luxury.
              </p>
            </Col>

            {/* Product Categories */}
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4" style={{marginTop:'30px',color:'#D2A44F'}}>
              <h6 className="text-uppercase fw-bold mb-4" style={{marginLeft:'8px'}}>Categories</h6>
              <Nav className="flex-column">
                <Nav.Link href="/mens" className="text-reset">Men's Perfumes</Nav.Link>
                <Nav.Link href="/womens" className="text-reset">Women's Perfumes</Nav.Link>
                <Nav.Link href="/unisex" className="text-reset">Unisex Scents</Nav.Link>
                <Nav.Link href="/giftsets" className="text-reset">Gift Sets</Nav.Link>
              </Nav>
            </Col>

            {/* Useful Links */}
            <Col md="3" lg="2" xl="2" className="mx-auto mb-4" style={{marginTop:'30px',color:'#D2A44F'}}>
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <Nav className="flex-column">
                <Nav.Link href="/" className="text-reset">Shop All</Nav.Link>
                <Nav.Link href="/brand" className="text-reset">Brands</Nav.Link>
                <Nav.Link href="/faq" className="text-reset">FAQs</Nav.Link>
                <Nav.Link href="/contact" className="text-reset">Contact Us</Nav.Link>
              </Nav>
            </Col>

            {/* Contact Information */}
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4" style={{marginTop:'30px',color:'#D2A44F'}}>
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p style={{marginBottom:'30px'}}>
                <FaMapMarkerAlt className="me-2" />
                123 Fragrance Lane, Karachi, Pakistan
              </p>
              <p  style={{marginBottom:'30px'}}>
                <FaEnvelope className="me-3" />
                support@scentsation.com
              </p>
              <p>
                <FaPhone className="me-3" /> +92 300 1234567
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="d-flex justify-content-center p-2">
        <Nav className="d-flex gap-3">
          <Nav.Item>
            <Nav.Link href="#!" className="text-reset">
              <FaFacebookF size={36} className="text-primary p-2 border rounded-circle" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!" className="text-reset">
              <FaTwitter size={36} className="text-info p-2 border rounded-circle" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!" className="text-reset">
              <FaInstagram size={36} className="text-danger p-2 border rounded-circle" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#!" className="text-reset">
              <FaLinkedinIn size={36} className="text-primary p-2 border rounded-circle" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </section>

      {/* Footer Bottom */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'#D2A44F' }}>
        © 2025 Copyright: <strong>Scentsation</strong>
      </div>
    </footer>
  );
};

export default Footer;
