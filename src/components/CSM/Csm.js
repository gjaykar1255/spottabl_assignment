import React from 'react';
import './csm-style.css'
import {MdDelete} from 'react-icons/md'
const Csm = (props) => {
    const reqArray=props.data.cardItems.Customer_success_Managers;
    return (
        <div className='user-card'>
            
                {
                    reqArray.map((manager,index)=>{
                        const name=manager.name;
                        const nameLength=name.split(" ");
                        return (
                            <div className='card-user-details' key={index}>
                                    <div id='name-logo'>{nameLength.length>1?(nameLength[0].charAt(0)+nameLength[1].charAt(0)).toUpperCase():(nameLength[0].charAt(0)).toUpperCase()}</div>
                                    <div>
                                         <div id='name'>{manager.name}</div>
                                         <div id='profession'>{manager.profession}</div>
                                    </div>
                               < MdDelete className='delete-icon' onClick={()=>{
                                    props.removeManager(
                                        {
                                            email:manager.email
                                        }
                                    )
                               }}/>
                            </div>
                        )
                    })
                }
        </div>
    )
}
export default Csm;
