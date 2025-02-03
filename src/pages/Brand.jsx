import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const Brands = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    padding: '40px',
    minHeight: '100vh',
  };

  const imageContainerStyle = {
    width: '100%',
    marginBottom: '50px',
  };

  const bannerImageStyle = {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
  };

  const boxStyle = {
    position: 'relative',
    width: '300px',
    height: '300px',
    backgroundColor: '#f4f4f4',
    border: '2px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.8,
    transition: 'opacity 0.3s ease',
  };

  const buttonStyle = {
    position: 'absolute',
    padding: '15px 25px',
    backgroundColor: '#dfdfdf',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    textTransform: 'uppercase',
    zIndex: 1,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  const handleHover = (e, show) => {
    const img = e.target.querySelector('img');
    const button = e.target.querySelector('button');
    if (button) button.style.opacity = show ? '1' : '0';
    e.target.style.transform = show ? 'scale(1.05)' : 'scale(1)';
    e.target.style.boxShadow = show ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none';
  };

  const images = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Dior_Logo_Design_History_Evolution_3_1024x1024.jpg?v=1694703784',
      name: 'Dior',
      link: 'dior', // Update with the correct route to the brand page
    },
    {
      src: 'https://logocreator.io/wp-content/uploads/2023/11/versace-brand-logo-symbol-clothes-design-icon-abstract-illustration-free-vector.jpg',
      name: 'Versace',
      link: 'versace',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHByStuFPVfK-buxnGfJrwH4gCiZtNJaZz_iO9Skp6EcqfEHevI-1r3wcW4CRhueWERS8&usqp=CAU',
      name: 'tomford',
      link: 'tomford',
    },
    {
      src: 'https://i.pinimg.com/474x/f5/7d/10/f57d109b1ef6068f671d6d79d82f1d25.jpg',
      name: 'ysl',
      link: 'ysl',
    },
    {
      src: 'https://1000logos.net/wp-content/uploads/2016/10/calvin-klein-emblem.jpg',
      name: 'ck',
      link: 'ck',
    },
    {
      src: 'https://i.pinimg.com/736x/25/15/64/2515642e99bb9afc2dcf4337f1ba4fa6.jpg',
      name: 'gucci',
      link: 'gucci',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOOy17H9W6qSyKywzCBZkxCqQb6R2XZQGNXv7aafbC9tvDOrs9WtYEOaIR7htQ4DtYeA&usqp=CAU',
      name: 'Chanel',
      link: 'chanel',
    },
  ];

  const boxes = images.map((image, index) => (
    <Link to={image.link} key={index} style={{ textDecoration: 'none' }}>
      <div
        style={boxStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        <img src={image.src} alt={`Brand ${index + 1}`} style={imageStyle} />
        <button style={buttonStyle}>Shop Now</button>
      </div>
    </Link>
  ));

  return (
    <div>
      {/* Image Container */}
      <div style={imageContainerStyle}>
        <img
          src={assets.brands_banner}
          alt="Featured Brands"
          style={bannerImageStyle}
        />
      </div>
      <h2 className="fs-7 text-center" style={{ color: 'black' }}>
        Luxury Brands
      </h2>
      {/* Boxes */}
      <div style={containerStyle}>{boxes}</div>
    </div>
  );
};

export default Brands;
