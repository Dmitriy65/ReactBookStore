import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const BookCard = book => {
  const { title, price, author, image, addToCart, addedCount } = book;

  
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{author}</Card.Header>
        <Card.Description>{title}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="rub" />
        {price}
      </Card.Content>
      <Button onClick={() => addToCart(book)}>Добавить в корзину ({addedCount})</Button>
    </Card>
  );
};

export default BookCard;
