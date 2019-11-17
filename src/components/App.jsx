import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import Menu from "./Menu";
import BookCard from "./BookCard";
import FilterMenu from "../containers/Filter";

class App extends Component {
  async componentDidMount() {
    const { setBooks } = this.props;
    let response = await fetch("/books.json");
    let books = await response.json();

    setBooks(books);
  }

  render() {
    const { books, isReady, setFilter } = this.props;

    return (
      <Container>
        <Menu />
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

export default App;
