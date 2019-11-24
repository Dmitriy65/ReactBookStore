import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as booksActions from "../actions/books";
import { getProfile, userLogout } from "../actions/auth";
import HomePage from "../components/HomePage";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy, searchQuery) => {
  searchQuery = searchQuery.toLowerCase();
  let findedBooks = [];
  switch (filterBy) {
    case "price_high":
      findedBooks = orderBy(books, "price", "desc");
      break;
    case "price_low":
      findedBooks = orderBy(books, "price", "asc");
      break;
    case "author":
      findedBooks = orderBy(books, "author", "asc");
      break;
    case "all":
    default:
      return books;
  }

  return findedBooks.filter(
    book =>
      book.title.toLowerCase().indexOf(searchQuery) >= 0 ||
      book.author.toLowerCase().indexOf(searchQuery) >= 0
  );
};

const mapStateToProps = ({ books, filter, auth }) => ({
  books:
    books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
  name: auth.currentUser.name
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
  getProfile: () => dispatch(getProfile()),
  userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
