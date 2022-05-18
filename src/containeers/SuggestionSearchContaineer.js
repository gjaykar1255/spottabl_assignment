import SuggestionSearchBar from "../components/SuggestionSearchBar/SuggestionSearchBar";
import { connect } from "react-redux";
import { toogleList,addToCsmList } from "../services/Actions/Action";
const mapStateToProps = (state) => ({
    customerSuccessManagers: state
});
const mapDispatchToProps = (dispatch) => ({
    toogleList: data => dispatch(toogleList(data)),
    addToCsmList:data=>dispatch(addToCsmList(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SuggestionSearchBar);
