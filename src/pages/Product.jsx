import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form, Badge, Image } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css"; // Import a CSS file for custom styles

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Fetch product data based on the productId
  useEffect(() => {
    if (products?.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setMainImage(product.image?.[0] || "default-image.jpg");
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    }
  }, [productId, products]);

  // Decrease quantity
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  // Increase quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Handle add to cart
  const handleAddToCart = () => {
    if (addToCart && productData) {
      addToCart(productData._id, quantity);
      toast.success(`${productData.name} added to cart!`, {
        position: "top-right",
        autoClose: 3000, // Toast will close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.error("Add to cart function not available.");
    }
  };

  return productData ? (
    <Container className="py-5">
      <Row className="g-4">
        {/* Product Images and Main Image */}
        <Col xs={12} md={7} className="text-center">
          <div className="d-flex flex-column align-items-center">
            {/* Main Image with Zoom Container */}
            <div className="zoom-container">
              <Image
                src={mainImage}
                alt={productData.name}
                fluid
                className="rounded shadow-sm mb-4 zoom-image"
                style={{ maxWidth: "450px", height: "390px", margin: "8px" }}
              />
            </div>

            {/* Thumbnails */}
            <div className="d-flex justify-content-center gap-2">
              {productData.image?.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(item)}
                  className={`img-thumbnail cursor-pointer ${
                    item === mainImage ? "border border-primary" : ""
                  }`}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        </Col>

        {/* Product Details */}
        <Col xs={12} md={5} className="d-flex flex-column justify-content-center">
          <h1 className="mb-3 py-2">{productData.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <span className="text-warning me-2 py-2">⭐⭐⭐⭐⭐</span>
            <span className="text-muted py-2">({productData.reviewsCount || "No reviews yet"})</span>
          </div>
          <Badge
            bg={productData.inStock ? "success" : "danger"}
            className="mb-3 text-uppercase"
          >
            {productData.inStock ? "In Stock" : "Out of Stock"}
          </Badge>

          <p className="py-2">
            <strong>Category:</strong> {productData.category}
          </p>
          <p className="py-2">
            <strong>Main Accords:</strong> {productData.type}
          </p>
          <p className="py-2">
            <strong>Brand:</strong> {productData.brand}
          </p>
          <p className="py-2">
            <strong>Price:</strong> <span className="text-primary">Rs. {productData.price}</span>
          </p>
          <p className="py-2">
            <strong>Description:</strong>
            <br />
            <p className="py-2">{productData.description}</p>
          </p>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-4 py-3">
            <Button
              variant="outline-secondary"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(Number(e.target.value) || 1, 1))}
              className="text-center mx-2"
              style={{ width: "80px" }}
            />
            <Button variant="outline-secondary" onClick={increaseQuantity}>
              +
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="primary"
            onClick={handleAddToCart}
            className="w-50 mb-2"
            disabled={!productData.inStock}
          >
            Add to Cart
          </Button>

          {/* Additional Information */}
          <hr />
          <ul className="list-unstyled">
            <li>✅ 100% Original Product</li>
            <li>✅ Cash on delivery available</li>
            <li>✅ Easy return policy within 7 days</li>
          </ul>
        </Col>
      </Row>

      {/* Related Products */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Related Products</h2>
          <RelatedProducts category={productData.category} currentProductId={productId} />
        </Col>
      </Row>

      {/* Toast Container */}
      <ToastContainer />
    </Container>
  ) : (
    <div className="text-center py-5">
      <p>Loading product...</p>
    </div>
  );
};

export default Product;