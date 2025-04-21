import React from "react";
import Filters from "./Filters/Filters";
import FlowersCards from "./Product Cards.jsx/FlowersCards";

function FlowersBoard() {
  return (
    <div className="mt-[16px] mx-[16px] desktop:mt-[0px] desktop:mx-[0px] mb-[37px]">
      <Filters />
      <FlowersCards />
    </div>
  );
}

export default FlowersBoard;
