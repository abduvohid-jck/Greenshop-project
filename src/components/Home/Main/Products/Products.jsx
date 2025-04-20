import React from "react";
import Categories from "./Categories/Categories";
import Flowers from "./Flowers/flowers";

function Products() {
  return (
    <div>
      <div className="desktop:container desktop:flex">
        <div className="hidden desktop:block">
          <Categories />
        </div>
        <Flowers />
      </div>
    </div>
  );
}

export default Products;

// Ushbu fayl kategoriyalar va gullarni flex qilib, birlashtirib chiqazib turishi kerak
