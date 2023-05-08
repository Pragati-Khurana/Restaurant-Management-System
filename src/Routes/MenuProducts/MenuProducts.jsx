import React, { useEffect } from "react";
import MenuProduct from "../../Components/MenuProduct/MenuProduct";
import "./MenuProducts.css";

const MenuProducts = ({ data }) => {
  return (
    <div className="menu-products-container d-flex flex-row flex-wrap">
      {data?.map((item) => (
        <MenuProduct item={item} />
      ))}
      {/* {
        <MenuProduct item={data[0]} />
      } */}
    </div>
  );
};

export default MenuProducts;
