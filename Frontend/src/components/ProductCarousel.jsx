import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductItem from "./Productitem";

const ProductCarousel = ({ bestsellers = [] }) => {
  if (!bestsellers.length) {
    return (
      <p className="text-center mt-4 text-muted">
        No products available
      </p>
    );
  }

  return (
    <div className="container">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="w-100 p-6 bg-light rounded"
      >
        {bestsellers.map((item, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center">
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
