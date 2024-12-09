import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    await fetch("https://steadofoods.onrender.com/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      setOrderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container my-4">
        <h1
          className="py-3 my-3 border-bottom"
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "#343a40",
          }}
        >
          My Orders
        </h1>
        <div className="row border-bottom py-3 my-3">
          {orderData?.orderData?.order_data &&
          orderData.orderData.order_data.length > 0 ? (
            orderData.orderData.order_data.reverse().map((order, index) => (
              <div key={index} className="col-12">
                {order && order.length > 1 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4>{order[0].Order_date}</h4>
                    <div className="row">
                      {order.slice(1).map((item, i) => (
                        <div
                          key={i}
                          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                        >
                          <div
                            className="card shadow-lg"
                            style={{
                              width: "100%",
                              maxHeight: "400px",
                              borderRadius: "15px",
                              transition: "transform 0.3s ease-in-out",
                              boxShadow:
                                "0 4px 8px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <div
                                className="container w-100 p-0"
                                style={{ height: "38px" }}
                              >
                                <span className="m-1">{item.qty}</span>
                                <span className="m-1">{item.size}</span>
                                <div className="d-inline ms-2 h-100 w-20 fs-5">
                                  ₹{item.price}/-
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="container p-5">
                    <h3>No order data available</h3>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="container p-5">
              <h3>Your "My Order" is Empty. Please place an order.</h3>
            </div>
          )}
        </div>
      </div>

      <Footer />

      {/* Inline CSS for custom shadow effects and responsiveness */}
      <style jsx>{`
        .card.shadow-lg {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15),
            0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .card.shadow-lg:hover {
          transform: translateY(-10px); /* Slightly lift the card on hover */
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        /* Add margin and padding to the container */
        .container.my-4 {
          padding: 20px;
          margin-top: 20px;
        }

        /* Ensures text within cards is aligned */
        .card-body .card-title {
          font-size: 1.1rem;
          font-weight: bold;
        }

        /* Mobile responsiveness */
        @media (max-width: 576px) {
          .card {
            margin-bottom: 15px;
          }
        }

        @media (min-width: 576px) and (max-width: 768px) {
          .card {
            margin-bottom: 20px;
          }
        }

        @media (min-width: 768px) and (max-width: 992px) {
          .card {
            margin-bottom: 25px;
          }
        }

        @media (min-width: 992px) {
          .card {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  );
}
