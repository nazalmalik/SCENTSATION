import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <Container fluid className="faq-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <Accordion defaultActiveKey="0" className="faq-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Scentsation?</Accordion.Header>
              <Accordion.Body>
                Scentsation is your ultimate online perfume store offering a wide range of branded perfumes for men, women, and unisex. We aim to bring the best fragrance experience right to your doorstep.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can I place an order?</Accordion.Header>
              <Accordion.Body>
                You can browse our product categories, select your desired perfume, and add it to the cart. Once you're ready, simply proceed to checkout to complete your order.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Body>
                We accept a variety of payment methods including credit/debit cards, bank transfers, and cash on delivery, depending on your location.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Do you offer gift wrapping services?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer premium gift wrapping options for all our products. You can select this option at checkout to add a personal touch to your gift.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How can I track my order?</Accordion.Header>
              <Accordion.Body>
                Once your order has been dispatched, you will receive a tracking number via email or SMS. You can use this number to track your package through the courier service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Can I return or exchange my perfume?</Accordion.Header>
              <Accordion.Body>
                We accept returns or exchanges on unopened and unused items within 14 days of receiving your order. Please refer to our return policy for more details.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
