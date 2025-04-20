import React from "react";
import Categories from "./Categories/Categories";
import FlowersBoard from "./Flowers/FlowersBoard";

function Products() {
  return (
    <div>
      <div className="desktop:container desktop:flex desktop:mb-[94px]">
        <Categories />
        <FlowersBoard />
      </div>
    </div>
  );
}

export default Products;

// Ushbu fayl kategoriyalar va gullarni flex qilib, birlashtirib chiqazib turishi kerak
