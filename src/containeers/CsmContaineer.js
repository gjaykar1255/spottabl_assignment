import { connect } from "react-redux";
import Csm from "../components/CSM/Csm";
import { removeFromManagersList } from "../services/Actions/Action";
const mapStateToProps = (state) => ({
    data: state
});
const mapDispatchToProps = (dispatch) => ({
    removeManager: data => dispatch(removeFromManagersList(data))
});
export default connect(mapStateToProps,mapDispatchToProps)(Csm);