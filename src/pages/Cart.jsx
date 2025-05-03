import React from "react";
import CartComponent from "../components/Cart/CartComponent";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Cart() {
  return (
    <div>
      <Navbar />
      <CartComponent />
      <Footer />
    </div>
  );
}

export default Cart;
