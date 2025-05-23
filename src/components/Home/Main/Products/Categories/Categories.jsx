import React from "react";
import Category from "./Category/Category";
import PriceRange from "./Price Range/PriceRange";
import DiscountFlower from "./Discount for flower/DiscountFlower";
import Size from "./Size/Size";

function Categories() {
  return (
    <div className="hidden desktop:block">
      <Category />
      <PriceRange />
      <Size />
      <DiscountFlower />
    </div>
  );
}

export default Categories;
