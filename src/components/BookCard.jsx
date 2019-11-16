import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const BookCard = ({ title, price, author, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{author}</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{title}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="rub" />
        {price}
      </a>
    </Card.Content>
  </Card>
);

export default BookCard;
