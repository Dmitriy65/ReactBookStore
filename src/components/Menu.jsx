import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CartComponent = ({
  title,
  id,
  image,
  removeFromCart,
  countOfEachBook
}) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button
          onClick={() => {
            const isDeleteBook = window.confirm(
              `Вы уверены, что хотите удалить книгу - ${title}`
            );
            if (isDeleteBook) removeFromCart(id);
          }}
          color="red"
        >
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>
        {title} : {countOfEachBook}
        {countOfEachBook === 1 ? " книга" : " книги"}
      </List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items, userLogout, userName }) => (
  <Menu>
    <Menu.Item name="browse">Магазин книг</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={
          items.length >= 1
            ? items.map((books, i) => (
                <CartComponent
                  {...books.book}
                  countOfEachBook={books.count}
                  key={i}
                />
              ))
            : "В корзине пусто..."
        }
        on="click"
        hideOnScroll
      />
      <Menu.Item name="browse">
        <Popup
          trigger={<div>Здраствуйте {userName}!</div>}
          content={
            <button
              onClick={() => {
                const isLogout = window.confirm(
                  `${userName}, вы уверены, что хотите выйти из своего профиля?`
                );
                if (isLogout) userLogout();
              }}
              style={{ padding: "5px" }}
            >
              Выйти из профиля!
            </button>
          }
          on="click"
          hideOnScroll
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
