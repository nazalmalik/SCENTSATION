import React, { useEffect, useState, useContext } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category, currentProductId }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (products && products.length > 0) {
      // Filter products based on the category, excluding the current product, and get the first 4
      const filteredProducts = products
        .filter((item) => item.category === category && item._id !== currentProductId)
        .slice(0, 4); // Get up to 4 related products
      setRelatedProducts(filteredProducts);
    }
  }, [products, category, currentProductId]); // Dependencies: products, category, currentProductId

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Redirect to the product detail page
  };

  return (
    <Container className="my-4 mt-5">
      <Row className="g-4">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <Col key={product._id} xs={12} sm={4} md={4} lg={3}>
              <Card
                className="h-100 shadow-sm border-0 rounded " style={{cursor:'pointer'}}
                onClick={() => handleProductClick(product._id)} // Add onClick event
              >
                <Card.Img
                  variant="top"
                  src={product.image?.[0] || "default-image.jpg"}
                  alt={product.name}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="text-muted mb-1">
                    Rs. {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No related products found.</p>
        )}
      </Row>
    </Container>
  );
};

export default RelatedProducts;
