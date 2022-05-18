import { REMOVE_MANAGER,ADD_CUSTOMER_SUCCESS_MANAGER,TOOGLE_LIST,ADD_PERMENANT,REMOVE_INDIVIDUAL_SELECTED,GET_LENGTH ,CLOSE} from "../constants";
import { employee,Customer_success_Managers } from "../../Data/dataFile";
const initialState={
    employee,
    Customer_success_Managers,
    toggle_list:false,
    filter:employee,
    selected:[],
    width:window.innerWidth,
    bool:false
}
export default function cardItems(state=initialState,action){
    switch(action.type){
        case REMOVE_MANAGER:
            const s=initialState.Customer_success_Managers.filter(
                (element)=>element.email!=action.data.email);
            initialState.Customer_success_Managers=s;
            return {
               ...state,Customer_success_Managers:s
            }
        case ADD_CUSTOMER_SUCCESS_MANAGER:
            //first check wheter it is ther in csm array or not if there then leave and if not there then 
            //add it to selected array
            var a=false;
            for(var csm of initialState.Customer_success_Managers){
                if(csm.email.includes(action.data.email)){
                    a=true; 
                }
                else{
                    if(state.selected.indexOf(action.data.name)<0);
                    else a=true;
                }
            }
            if(!a)
            return {
                ...state, selected: [...state.selected, action.data.name]
            }
            else return{
                ...state,selected:state.selected
            }
        case TOOGLE_LIST:
            const q=initialState.filter.filter(
                (element)=>element.email.toLowerCase().includes(action.data.data.toLowerCase()) || element.name.toLowerCase().includes(action.data.data.toLowerCase())
            )
            return{
            ...state,toggle_list:action.data.bool,filter:q
        }
        case ADD_PERMENANT:
            for (var sel of state.selected) {
                for(var objSel of state.employee){
                    if(sel==objSel.name){
                        initialState.Customer_success_Managers.push(objSel);
                    }
                }
            }
            return {
            ...state,selected:[],toggle_list:false
        }
        case REMOVE_INDIVIDUAL_SELECTED:
            const newArray = [];
            for(var names of state.selected){
                if(names===action.data.name);
                else newArray.push(names);
            }
            return {
            ...state,selected:newArray
        }
        case GET_LENGTH:
            return {
            ...state,width:action.data.width
        }
        case CLOSE: 
            return{
            ...state,toggle_list:action.data.data
        }
        default :return state;
    }
}