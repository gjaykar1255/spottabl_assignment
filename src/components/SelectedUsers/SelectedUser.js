import React,{useEffect} from 'react';
import { ImCross } from 'react-icons/im'
import './SelectedUser-style.css'
const SelectedUser = (props) => {
    const arr=props.data.cardItems.selected;
    return (
        <div className='selected' >
            {
                arr.map((element,index)=>{
            return <div className='x'key={index} onClick={
                ()=>props.removeIndividual({
                    name:element
                })
            }>
                     <span id='selected-name'>{element}</span>
                     <span><ImCross className='cross'/></span>
            </div>
                })
}
        </div>
    );
}

export default SelectedUser;
