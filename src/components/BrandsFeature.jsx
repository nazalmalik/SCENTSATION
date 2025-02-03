import React from "react";

const FeaturedBrands = () => {
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section style={{ padding: "60px 0" }}>
      {/* Heading Section */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          color: "#333",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Brands Features
      </h2>

      {/* Brands Logos Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px", // Add equal spacing between logos
        }}
      >
        {/* Array of brand logos */}
        {[
          {
            src: "https://media.designrush.com/inspiration_images/136098/conversions/_1513769277_453_prada1_81278a439727-mobile.jpg",
            alt: "Prada",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yy0b_b-QPYhkVh7y1TpanaPHxZhrOKdWNg&s",
            alt: "Gucci",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1X7DnV49bMmsB4wg-PIsZ-HuiegiKEHggA&s",
            alt: "Versace",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3y3-SPkO9c7pWpYr1tk_sdUgcW26z-sy4w&s",
            alt: "Chanel",
          },
          {
            src: "https://images.seeklogo.com/logo-png/4/2/dior-logo-png_seeklogo-41696.png",
            alt: "Dior",
          },
          {
            src: "https://static.vecteezy.com/system/resources/thumbnails/008/386/000/small_2x/ck-or-kc-initial-letter-logo-design-vector.jpg",
            alt: "CK",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFh2ooIUiWti5_KNCERMua7_WdL483nh2rg&s",
            alt: "Tom Ford",
          },
        ].map((brand, index) => (
          <div
            key={index}
            style={{
              width: "120px", // Ensure all logos have equal space
              height: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={brand.src}
              alt={brand.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
