import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCarousel from "./ProductCarousel";

const Bestsellers = () => {
  const { products } = useContext(ShopContext);
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setBestsellers(products.slice(0, 6)); // Fetch top 6 products
    }
  }, [products]);

  return (
    <div className="my-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Best Sellers</h2>
        <p className="mx-auto text-muted fs-6 w-75">
          Discover what everyone’s loving – our top picks just for you!
        </p>
      </div>

      {/* Carousel Component */}
      <div className="container mt-5 mb-8">
  <div className="d-flex flex-wrap justify-content-between gap-4">
    <ProductCarousel bestsellers={bestsellers} />
  </div>
</div>
</div>

  );
};

export default Bestsellers;
