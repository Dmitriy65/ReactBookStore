import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = ({ totalPrice, count }) => (
  <Menu>
    <Menu.Item name="browse">Магазин книг</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item name="submit">
        Итого: &nbsp; <b>{totalPrice}</b> руб.
      </Menu.Item>
      <Menu.Item name="signup">
        Корзина (<b>{count}</b>)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
