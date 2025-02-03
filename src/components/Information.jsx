import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const InformationSection = () => {
  return (
    <div className="container px-5 py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {/* Quality Guarantee */}
        <div className="col d-flex justify-content-center">
          <div 
            className="card p-4 border-0 shadow-sm rounded-lg text-center"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
              backgroundColor: "#f8f9fa"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e2e6ea"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
          >
            <img 
              src={assets.quality_guranty} 
              alt="Quality Guarantee" 
              className="card-img-top mx-auto mb-4 w-50 h-auto"
              style={{ transition: "transform 0.3s ease" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
            <div className="card-body">
              <h5 className="card-title text-dark font-weight-bold">
                Quality Guarantee
              </h5>
              <p className="card-text text-muted">
              Ensure all products meet the highest standards of quality
            
              </p>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="col d-flex justify-content-center">
          <div 
            className="card p-4 border-0 shadow-sm rounded-lg text-center"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
              backgroundColor: "#f8f9fa"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e2e6ea"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
          >
            <img 
              src={assets.return_policy} 
              alt="Return Policy" 
              className="card-img-top mx-auto mb-4 w-50 h-auto"
              style={{ transition: "transform 0.3s ease" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
            <div className="card-body">
              <h5 className="card-title text-dark font-weight-bold">
                Return Policy
              </h5>
              <p className="card-text text-muted">
                Easy returns and exchanges within a specified period
              </p>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="col d-flex justify-content-center">
          <div 
            className="card p-4 border-0 shadow-sm rounded-lg text-center"
            style={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
              backgroundColor: "#f8f9fa"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e2e6ea"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
          >
            <img 
              src={assets.support} 
              alt="Support" 
              className="card-img-top mx-auto mb-4 w-50 h-auto"
              style={{ transition: "transform 0.3s ease" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
            <div className="card-body">
              <h5 className="card-title text-dark font-weight-bold">
                Support
              </h5>
              <p className="card-text text-muted">
                Our customer support team is available 24/7 to assist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
