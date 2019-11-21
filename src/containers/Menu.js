import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import { userLogout } from "../actions/auth";
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

const deleteDuplicateBook = (bookItem, books) => {
  return books.filter(book => Number(book.id) !== Number(bookItem.id));
};

const sortBooks = books => {
  const sortedBooks = [];
  const Length = books.length;
  for (let i = 0; i < Length; i++) {
    let count = booksCount(books[0], books);
    if (count) {
      let obj = {
        count: count,
        book: books[0]
      };
      sortedBooks.push(obj);
      books = deleteDuplicateBook(books[0], books);
    }
  }

  return sortedBooks;
};

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: sortBooks(cart.items)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
  userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
