import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ProductItem from "../components/Productitem";
import "../components/Card.css";

const Mens = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [types, setTypes] = useState([]);

  // Toggle Seasons filter
  const toggleBrand = (e) => {
    const value = e.target.value;
    setBrand((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle Price Range filter
  const togglePriceRange = (e) => {
    const value = e.target.value;
    setPriceRange((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle Type filter
  const toggleType = (e) => {
    const value = e.target.value;
    setTypes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = products;
  
    // Filter for Men's category
    filtered = filtered.filter(
      (product) => product.category.toLowerCase() === "men"
    );
  
    // Apply Seasons filter
    if (Brand.length > 0) {
      filtered = filtered.filter((product) => Brand.includes(product.brand));
    }
  
    // Apply Price Range filter
    if (priceRange.length > 0) {
      filtered = filtered.filter((product) => {
        const price = product.price;
        return priceRange.some((range) => {
          if (range === "under1000") return price < 1000;
          if (range === "1000to2000") return price >= 1000 && price <= 2000;
          if (range === "2000to3000") return price > 2000 && price <= 3000;
          if (range === "3000to4000") return price > 3000 && price <= 4000;
          if (range === "over4000") return price > 4000;
          return false;
        });
      });
    }
  
    // Apply Type filter
    if (types.length > 0) {
      filtered = filtered.filter((product) => {
        const productType = product.type; // Safeguard for product.type
        if (!productType) return false; // Skip if type is undefined or null
    
        if (Array.isArray(productType)) {
          // Handle array of types
          return productType.some((t) => types.includes(t.toLowerCase()));
        }
        // Handle string type
        return types.includes(productType.toLowerCase());
      });
    }
    
  
    setFilterProducts(filtered);
  }, [Brand, priceRange, types, products]);
  

  return (
    <div className="d-flex flex-column p-0 border-top">
      {/* Full Screen Image Container */}
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${assets.menshero_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "390px",
          width: "1349px",
        }}
      >
        <div
          className="image-overlay text-center text-white d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        ></div>
      </div>

      {/* Main Row: Filters and Product Grid */}
      <div className="d-flex flex-column flex-sm-row gap-3 p-5">
        {/* Filter Section */}
        <div className={`filter col-12 col-sm-4 col-md-3`}>
          <p
            className="my-2 fs-4 d-flex align-items-center cursor-pointer gap-2 fw-bold"
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS
            <img
              className={`h-auto ${showFilter ? "rotate-90" : ""} d-sm-none`}
              style={{ width: "8px", height: "20px" }}
              src={assets.dropdown_icon}
              alt="arrow"
            />
          </p>

          {/* Seasons Filters */}
          <div
            className={`border p-3 mt-4 ${
              showFilter ? "" : "d-none"
            } d-sm-block`}
          >
            <p className="fs-6 fw-bold">Brands</p>
            <div className="d-flex flex-column gap-2">
              {["Gucci","J. by Junaid Jamshed","Chanel","Dior","Bonanza Satrangi","Versace","Sapphire","Tom Ford","Scent Sation"].map((brand) => (
                <p key={brand} className="d-flex gap-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={brand}
                    onChange={toggleBrand}
                  />
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </p>
              ))}
            </div>
          </div>

          {/* Price Range Filters */}
          <div
            className={`border p-3 mt-4 ${
              showFilter ? "" : "d-none"
            } d-sm-block`}
          >
            <p className="fs-6 fw-bold">Price Range</p>
            <div className="d-flex flex-column gap-2">
              {[
                { label: "Under Rs.1000", value: "under1000" },
                { label: "Rs.1000 - Rs.2000", value: "1000to2000" },
                { label: "Rs.2000 - Rs.3000", value: "2000to3000" },
                { label: "Rs.3000 - Rs.4000", value: "3000to4000" },
                { label: "Over Rs.4000", value: "over4000" },
              ].map((range) => (
                <p key={range.value} className="d-flex gap-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={range.value}
                    onChange={togglePriceRange}
                  />
                  {range.label}
                </p>
              ))}
            </div>
          </div>

          {/* Type Filters */}
          <div
            className={`border p-3 mt-4 ${
              showFilter ? "" : "d-none"
            } d-sm-block`}
          >
            <p className="fs-6 fw-bold">Type</p>
            <div className="d-flex flex-column gap-2">
              {[
                { label: "Citrus", value: "citrus" },
                { label: "Floral", value: "floral" },
                { label: "Fruity", value: "fruity" },
                { label: "Green", value: "green" },
                { label: "Oriental", value: "oriental" },
                { label: "Sweet", value: "sweet" },
                { label: "Woody", value: "woody" },
              ].map((type) => (
                <p key={type.value} className="d-flex gap-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value={type.value}
                    onChange={toggleType}
                  />
                  {type.label}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          <h2 className="fs-2 fw-bold mb-4 text-center p-4">Men's Perfumes</h2>
          <div
            className="d-flex flex-wrap"
            style={{
              rowGap: "20px",
              columnGap: "20px",
              minHeight: "300px",
              marginLeft: "60px",
            }}
          >
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <div
                  key={index}
                  style={{
                    flex: "1 1 calc(33.333% - 20px)",
                    maxWidth: "calc(33.333% - 20px)",
                    minWidth: "250px",
                  }}
                >
                  <ProductItem
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mens;
