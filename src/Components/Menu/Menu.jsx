import React, { useEffect, useState } from "react";
import PageHeader from "../../BasicComponents/PageHeader/PageHeader";
import MenuProducts from "../../Routes/MenuProducts/MenuProducts";
import "./Menu.css";

const Menu = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let obj = await fetch("https://jsonplaceholder.typicode.com/photos");
      let temp = await obj.json();
      // setRes(temp);
      temp = temp.slice(0, 20);
      setRes(temp);
    };
    fetchData();
  }, []);
  console.log("1", res);
  return (
    <div>
      <PageHeader
        bgImg="https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-614.jpg"
        title="Menu"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam."
      />
      <div className="menu-title py-5">
        <h1>
          Until I discovered cooking I was never really interested in anything
        </h1>
      </div>
      <MenuProducts data={res} />
    </div>
  );
};

export default Menu;
