import React,{useState} from 'react';
import './SuggestionSearch-style.css';
import { GrUser} from 'react-icons/gr'
const SuggestionSearchBar = (props) => {
    const employeeArray=props.customerSuccessManagers.cardItems.filter;
    //console.log(props);
    return (
        <div >
            <div className="suggestion-box" >
            {
                employeeArray.map((employee,index)=>{
                    const name = employee.name;
                    const nameLength = name.split(" ");
                    return <div className='inner-box'key={index} onClick={()=>
                        {
                        props.addToCsmList({
                            email:employee.email,
                            name:employee.name,
                            profession:employee.profession
                        })
                        }}>
                        <div id='logo-name'>{nameLength.length > 1 ? (nameLength[0].charAt(0) + nameLength[1].charAt(0)).toUpperCase() : (nameLength[0].charAt(0)).toUpperCase()}</div>
                        <div className='inner-inner'>
                            <div id='name'>{employee.name}</div>
                            <div className='i'>
                                <span ><GrUser className='icon-figure'/></span>
                                <span id='profession' className='pro'>{employee.profession}</span>
                                <span className='dot'>.</span>
                                <span id='profession' className='mail'>{employee.email}</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        </div>

    );
}

export default SuggestionSearchBar;
