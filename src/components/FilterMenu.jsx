import React from "react";
import { Menu } from "semantic-ui-react";

const FilterMenu = props => {
  const { setFilter, filterBy } = props;

  return (
    <Menu secondary>
      <Menu.Item active={filterBy === "all"} onClick={() => setFilter("all")}>
        Все
      </Menu.Item>

      <Menu.Item
        active={filterBy === "popular"}
        onClick={() => setFilter("popular")}
      >
        Популярные
      </Menu.Item>
      <Menu.Item
        active={filterBy === "price_high"}
        onClick={() => setFilter("price_high")}
      >
        Цена (дорогие)
      </Menu.Item>
      <Menu.Item
        active={filterBy === "price_low"}
        onClick={() => setFilter("price_low")}
      >
        Цена (дешевые)
      </Menu.Item>
      <Menu.Item
        active={filterBy === "author"}
        onClick={() => setFilter("author")}
      >
        Автор
      </Menu.Item>
    </Menu>
  );
};

export default FilterMenu;
