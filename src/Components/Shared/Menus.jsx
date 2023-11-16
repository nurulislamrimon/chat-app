/* eslint-disable react/prop-types */
import { useState } from "react";
import { menus } from "../../../Contants/menus";

const Menus = ({ selectedMenu, setSelectedMenu }) => {
  const [user, setUser] = useState({});

  const excludedFields = user ? ["Login", "Signup"] : ["Log out"];

  const menuBtns = menus
    ?.filter((menuObj) => !excludedFields.includes(menuObj.value))
    .map((menu) => (
      <button
        className={menu.value === selectedMenu ? "active" : ""}
        key={menu.value}
        onClick={() => {
          menu.value !== "Log out"
            ? setSelectedMenu(menu.value)
            : setUser(null);
        }}
      >
        {menu.label}
      </button>
    ));

  return <nav>{menuBtns}</nav>;
};

export default Menus;
