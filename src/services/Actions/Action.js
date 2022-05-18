 import { REMOVE_MANAGER,TOOGLE_LIST,ADD_CUSTOMER_SUCCESS_MANAGER,ADD_PERMENANT,REMOVE_INDIVIDUAL_SELECTED,GET_LENGTH ,CLOSE} from "../constants"
 export const removeFromManagersList=(data)=>{
     return {
         type:REMOVE_MANAGER,
         data:data
     }
 }
 export const toogleList=(data)=>{
     return {
         type:TOOGLE_LIST,
         data:data
     }
 }
 export const addToCsmList=(data)=>{
     return {
         type: ADD_CUSTOMER_SUCCESS_MANAGER,
         data:data
     }
 }
 export const addPermenant=(data)=>{
     return{
         type:ADD_PERMENANT,
         data:data
     }
 }
 export const removeIndividual=(data)=>{
     return {
         type:REMOVE_INDIVIDUAL_SELECTED,
         data:data
     }
 }
 export const inWidth=(data)=>{
     return {
         type:GET_LENGTH,
         data:data
     }
 }
 export const close=(data)=>{
     return {
         type:CLOSE,
         data:data
     }
 }