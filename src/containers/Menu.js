import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import Menu from "./../components/Menu";

const booksCount = (bookItem, books) => {
  return books.reduce(
    (totalCount, currentbook) =>
      Number(bookItem.id) === Number(currentbook.id)
        ? ++totalCount
        : totalCount,
    0
  );
};

const sortBooks = books => {
  //debugger;
  const sortedBooks = [];
  for (let i = 0; i < books.length; i++) {
    const count = booksCount(books[i], books);
    console.log(count);

    if (count) {
      let obj = {
        count: count,
        book: books[i]
      };
      sortedBooks.push(obj);
      books = books.filter(book => Number(book.id) !== Number(books[i].id));
    }
  }
  console.log(sortedBooks);
  
  return sortedBooks;
};

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: sortBooks(cart.items)  
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
