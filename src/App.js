import React, { Component } from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/books";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import Menu from "./components/Menu";
import BookCard from "./components/BookCard";

class App extends Component {
  async componentDidMount() {
    const url = "http://localhost:3000/books.json";
    const { setBooks } = this.props;
    let response = await fetch(url);
    let books = await response.json();

    setBooks(books);
  }

  render() {
    const { books, isReady } = this.props;

    return (
      <Container>
        <Menu />
        <Card.Group itemsPerRows={4}>
          {!isReady
            ? "books is loading..."
            : books.map(book => <BookCard {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
