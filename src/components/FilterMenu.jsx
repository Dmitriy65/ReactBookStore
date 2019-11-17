import React from "react";
import { Menu, Input } from "semantic-ui-react";

const FilterMenu = props => {
  const { setFilter, setSearchQuery, filterBy, searchQuery } = props;

  return (
    <Menu secondary>
      <Menu.Item active={filterBy === "all"} onClick={() => setFilter("all")}>
        Все
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
      <Menu.Item>
        <Input
          icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Введите запрос"
        ></Input>
      </Menu.Item>
    </Menu>
  );
};

export default FilterMenu;
