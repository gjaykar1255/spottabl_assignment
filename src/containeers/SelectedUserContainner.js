import { connect} from "react-redux";
import SelectedUser from "../components/SelectedUsers/SelectedUser";
import { removeIndividual } from "../services/Actions/Action";
const mapStateToProps=(state)=>({
    data:state
});
const mapDispatchToProps=(dispatch)=>({
    removeIndividual:data=>dispatch(removeIndividual(data)),
})
export default connect(mapStateToProps,mapDispatchToProps)(SelectedUser);