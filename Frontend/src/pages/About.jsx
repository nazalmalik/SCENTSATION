import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="mb-3 mt-5">About Us</h1>
          <p className="text-muted mt-5">
            Welcome to <strong>Your Perfume Store</strong>, your ultimate destination for luxury fragrances. 
            We pride ourselves on offering an exquisite collection of perfumes from globally renowned brands, 
            catering to men, women, and unisex preferences. Whether you're searching for timeless classics or 
            modern scents, we are here to provide you with a seamless and delightful shopping experience.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5 mt-5">
        <Col md={6}>
          <Image 
            src="https://retaildesignblog.net/wp-content/uploads/2013/09/Linda-vuela-a-Rio-store-by-estudiHac-Murcia-Spain.jpg" 
            alt="About Us" 
            fluid 
            rounded
            style={{paddingTop:'120px'}}
          />
        </Col>
        <Col md={6}>
          <h2 style={{marginTop:'10px',textAlign:'center'}}>Our Mission</h2>
          <p style={{marginTop:'60px'}}>
            At <strong>Your Perfume Store</strong>, our mission is to deliver high-quality, authentic fragrances 
            that embody elegance and sophistication. We strive to ensure customer satisfaction through exceptional 
            service, a user-friendly platform, and exclusive deals.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5" style={{marginTop:'140px'}}>
        <Col md={6} style={{marginTop:'20px'}}>
          <h2 style={{marginTop:'-70px'}}>Why Choose Us?</h2>
          <ul style={{marginTop:'40px', gap:'40px'}}>
            <li>Authentic and verified perfumes from top brands</li>
            <li>Easy and secure shopping experience</li>
            <li>Exclusive offers and discounts</li>
            <li>Excellent customer service</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image 
            src="https://hips.hearstapps.com/hmg-prod/images/perfume-3-1649174974.png" 
            alt="Why Choose Us" 
            fluid 
            rounded
          />
        </Col>
      </Row>

      
    </Container>
  );
};

export default About;
