import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main role="main" className="p-3">
        <div
          className="jumbotron shadow-lg mb-4"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            padding: "2rem",
          }}
        >
          <div className="container text-center">
            <h1 className="display-4 fw-bold border-bottom py-3 mb-4">
              About Steadofoods
            </h1>
            <h4 className="text-muted">
              Welcome to Steadofoods – Your Culinary Journey Begins Here!
            </h4>
            <p className="lead mt-3">
              At Steadofoods, we believe that great meals have the power to
              bring people together, create lasting memories, and add a dash of
              joy to life. Our mission is to provide a seamless and delightful
              food ordering experience, connecting you with a diverse array of
              culinary delights from the comfort of your home.
            </p>
          </div>
        </div>

        <div className="container border-top py-4">
          <div className="row gy-4">
            <div
              className="col-12 col-md-6 col-lg-4 shadow-sm p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <h2>Our Story</h2>
              <p className="text-muted">
                Steadofoods started with a simple yet profound idea: to make
                ordering food not just a transaction but an experience. Founded
                by a team of food enthusiasts and tech innovators, our platform
                was born out of a shared love for delicious cuisine and the
                desire to make it easily accessible to everyone.
              </p>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4 shadow-sm p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <h2>What Sets Us Apart</h2>
              <p className="text-muted">
                <b>Exceptional Variety:</b> A curated selection of restaurants
                and eateries catering to every palate. From classics to exotic
                flavors, there’s something for everyone. <br />
                <b>Seamless Ordering:</b> A user-friendly platform that ensures
                quick and effortless ordering from any device. <br />
                <b>Quality and Freshness:</b> Partnering with renowned
                establishments, we deliver culinary experiences that meet the
                highest standards.
              </p>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4 shadow-sm p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
            >
              <h2>Our Team</h2>
              <p className="text-muted">
                Behind Steadofoods is a passionate team committed to creating a
                world where good food is never more than a few clicks away. From
                developers and designers to food critics and customer support,
                each member of the Steadofoods family plays a crucial role in
                delivering excellence to your doorstep.
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <h1 className="border-bottom py-3 mb-4">
              Join Us on this Culinary Adventure
            </h1>
            <p className="lead text-muted">
              Explore the world of Steadofoods – a place where flavor knows no
              bounds, and every meal is a celebration. Join us on this culinary
              adventure, and let Steadofoods be your trusted companion for all
              your dining experiences.
            </p>
            <p className="text-muted">Indulge. Savor. Enjoy.</p>
            <p className="fw-bold">ACHAL GUPTA</p>
            <p className="fw-bold">The Steadofoods Team</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
