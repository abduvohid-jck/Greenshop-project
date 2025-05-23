import React from "react";
import Categories from "./Categories/Categories";
import FlowersBoard from "./Flowers/FlowersBoard";

function Products() {
  return (
    <div>
      <div className="desktop:container desktop:flex desktop:mb-[94px] desktop:gap-[50px] desktop:justify-between">
        <Categories />
        <FlowersBoard />
      </div>
    </div>
  );
}

export default Products;
