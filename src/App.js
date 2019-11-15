import React, { Component } from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/books";

class App extends Component {
  render() {
    const { books } = this.props.books;
    const { setBooks } = this.props;
    const newBooks = [
      {
        title: "Js Book",
        id: 0
      }
    ];

    return (
      <div>
        <div className="container">{books[0].title}</div>
        <button onClick={() => setBooks(newBooks)}>Click me</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
