import React from "react";
import { assets } from "../assets/frontend_assets/assets"; // Adjust path
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  // Category data
  const categories = [
    { name: "Men", image: assets.men_category, route: "/mens" },
    { name: "Women", image: assets.women_category, route: "/women" },
    { name: "Unisex", image: assets.unisex_category, route: "/unisex" },
    { name: "Giftsets", image: assets.giftset_category, route: "/giftsets" },
  ];

  return (
    <div style={{ textAlign: "center", margin: "3rem 0" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Categories</h2>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(category.route)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {/* Category Image */}
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                width: "14rem",
                height: "14rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Category Name */}
            <h2
              style={{
                marginTop: "1rem",
                fontWeight: "600",
                color: "#6c757d",
                fontSize: "1.2rem",
              }}
            >
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
