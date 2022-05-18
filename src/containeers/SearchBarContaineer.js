import SearchBar from "../components/SearchBar/SearchBar";
import { connect } from "react-redux";
import { toogleList,addPermenant ,inWidth,close} from "../services/Actions/Action";
const mapStateToProps = (state) => ({
    customerSuccessManagers: state
});
const mapDispatchToProps = (dispatch) => ({
    toogleList: data => dispatch(toogleList(data)),
    addPermenant:data=>dispatch(addPermenant(data)),inWidth:data=>dispatch(inWidth(data)),close:data=>dispatch(close(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);