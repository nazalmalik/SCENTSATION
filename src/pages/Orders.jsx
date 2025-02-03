import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div
      className="pt-4"
      style={{
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <h3
          className="ms-3"
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          My Orders
        </h3>
        <div>
          {products.slice(1, 4).map((item, index) => (
            <Card
              key={index}
              className="my-4 border"
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                margin: '0 auto',
              }}
            >
              <Row className="g-3">
                <Col md={3} style={{ padding: '0' }}>
                  <img
                    className="w-100"
                    src={item.image[0]}
                    alt={item.name}
                    style={{
                      borderRadius: '10px',
                      objectFit: 'contain',
                      height: '250px',
                    }}
                  />
                </Col>
                <Col md={7}>
                  <Card.Body style={{ padding: '1rem' }}>
                    <Card.Title className="fs-5 fw-medium" style={{ color: '#333' }}>
                      {item.name}
                    </Card.Title>
                    <div
                      className="d-flex align-items-center gap-3 mb-2"
                      style={{ fontSize: '1rem', color: '#555' }}
                    >
                      <p className="fs-5 mb-0" style={{ fontWeight: 'bold' }}>
                        {currency}{item.price}
                      </p>
                      <p className="mb-0">Quantity: 1</p>
                      <p className="mb-0">Size: M</p>
                    </div>
                    <p className="mb-2" style={{ color: '#777' }}>
                      Date: <span className="text-muted">20, January, 2025</span>
                    </p>
                  </Card.Body>
                </Col>
                <Col md={2} className="d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center gap-2" style={{ marginBottom: '10px' }}>
                    <span
                      className="badge bg-success"
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#28a745',
                      }}
                    ></span>
                    <p className="mb-0" style={{ fontWeight: 'bold', color: '#28a745' }}>Ready To Ship</p>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    style={{
                      borderRadius: '20px',
                      padding: '0.5rem 1rem',
                      marginBottom:'10px',
                      marginRight:'50px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Track Order
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
