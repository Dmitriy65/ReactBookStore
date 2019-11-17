import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as filterActions from "../actions/filter";
import FilterMenu from "./../components/FilterMenu";

const mapStateToProps = ({ filter }) => ({
  filterBy: filter.filterBy,
  searchQuery: filter.searchQuery
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
