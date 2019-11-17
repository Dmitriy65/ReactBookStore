import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const BookCard = ({ title, price, author, image }) => (
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
  </Card>
);

export default BookCard;
