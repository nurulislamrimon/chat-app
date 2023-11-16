/* eslint-disable react/prop-types */
import { menus } from "../../../Contants/menus";

const Menus = ({ selectedMenu, setSelectedMenu }) => {
  const menuBtns = menus.map((menu) => (
    <button
      className={menu.value === selectedMenu ? "active" : ""}
      key={menu.value}
      onClick={() => setSelectedMenu(menu.value)}
    >
      {menu.label}
    </button>
  ));
  return <nav>{menuBtns}</nav>;
};

export default Menus;
