import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-decoration-none text-dark"
      title={name}
    >
      <div
        className="card border-0 mx-auto"
        style={{
          maxWidth: "auto", // Consistent max width for all product cards
          height: "auto",
          background: "transparent",
        }}
      >
        {/* Product Image */}
        <div
          className="overflow-hidden rounded-top"
          style={{
            background: "transparent",
          }}
        >
          <img
            src={Array.isArray(image) ? image[0] : image}
            alt={name || "Product Image"}
            className="card-img-top img-fluid"
            style={{
              width: "100%", // Ensures image takes the full card width
              height: "250px", // Fixed height for uniformity
              objectFit: "cover", // Prevents distortion
              transition: "transform 0.3s ease-in-out", // Smooth hover effect
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Card Body */}
        <div
          className="card-body p-3 text-start"
          style={{ background: "transparent" }}
        >
          {/* Product Name */}
          <h5 className="card-title" title={name}>
            {name}
          </h5>

          {/* Product Price */}
          <p className="card-text">
            {currency}
            {price?.toLocaleString()} {/* Formats price */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
