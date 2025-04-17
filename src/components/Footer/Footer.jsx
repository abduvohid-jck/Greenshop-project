import React from "react";
import TopFoooter from "./Top/TopFoooter";
import MiddleFooter from "./Middle/MiddleFooter";
import BottomFooter from "./Bottom/BottomFooter";

function Footer() {
  return (
    <div className="desktop:container">
      <TopFoooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default Footer;
