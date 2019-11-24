import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import BookCard from "../containers/BookCard";
import FilterMenu from "../containers/Filter";
import Menu from "../containers/Menu";

class HomePage extends Component {
  async componentDidMount() {
    this.props.getProfile();

    const { setBooks } = this.props;
    let response = await fetch("/books.json");
    let books = await response.json();

    setBooks(books);
  }

  render() {
    const { books, isReady, setFilter, name } = this.props;
    return (
      <Container>
        <Menu />
        <div>Здраствуйте {name}!</div>
        <FilterMenu setFilter={setFilter} />
        <Card.Group>
          {!isReady
            ? "books is loading..."
            : books.map(book => <BookCard {...book} key={book.id} />)}
        </Card.Group>
        
      </Container>
    );
  }
}

export default HomePage;
