import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CheckoutComponent from "../components/Checkout/CheckoutComponent";
import Footer from "../components/Footer/Footer";

function Checkout() {
  return (
    <div>
      <Navbar />
      <CheckoutComponent />
      <Footer />
    </div>
  );
}

export default Checkout;
