import React,{useEffect,useRef} from 'react';
import {TextField,Button} from '@mui/material';
import './SearchBar-style.css';
import styled from 'styled-components'
import SuggestionSearchContainner from '../../containeers/SuggestionSearchContaineer';
import SelectedUserContaineer from '../../containeers/SelectedUserContainner';
const CustomTextField=styled(TextField)`
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color:rgb(75, 0, 130);
    color:rgb(75, 0, 130);
}
`
const SearchBar = (props) => {
    const booleanVal=props.customerSuccessManagers.cardItems.toggle_list;
    const s = props.customerSuccessManagers.cardItems.selected.length;
    const myRef=useRef();
    useEffect(()=>{
        document.addEventListener('mousedown',(event)=>{
            if(!myRef.current.contains(event.target)){
                if(props.customerSuccessManagers.cardItems.toggle_list){
                    //console.log("true only then called")
                    props.close({data:false})
                }
            }
            else {
                if (!props.customerSuccessManagers.cardItems.toggle_list) {
                    //console.log("false only then called")
                    props.close({ data: true })
                }
            }
        })
    }, [props.customerSuccessManagers.cardItems.toggle_list])
    const myFucntion=(e)=>{
       const str=e.target.value; 
       if(str.length>=1){
           props.toogleList({
               bool:true,
               data:e.target.value
           });
       }
       if(str.length==0) {
           props.toogleList({
               bool:false,
               data:e.target.value
            })
       }
    }
    return (
        <div className='search-bar' ref={myRef}>
            <SelectedUserContaineer  />
            <CustomTextField id="text-field" label="Add by Name or email" variant="outlined" style={{ width: "100%" }} onChange={(e) => myFucntion(e)} inputProps={
                {
                style: window.innerWidth>768&&s>=1?{
                        paddingLeft: `65%`,border:"none"
                }:{
                            paddingLeft: `2%`, border:"none"
                }
            }
        } 
            />
            <Button variant="contained" id="btn" onClick={()=>{
                props.addPermenant({});
            }}>Add CSM</Button>
            <div id="users-listing-page">
               {booleanVal? <SuggestionSearchContainner/>:<></>}
            </div>
        </div>
    );
}
export default SearchBar;
