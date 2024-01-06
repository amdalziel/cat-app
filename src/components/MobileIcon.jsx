import React from 'react'
import './MobileIcon.css'
import PropTypes from "prop-types";

function MobileIcon(props) {
    const par = props.paragraph; 
    const tab = props.table; 
    const bStyle = props.backgroundStyle;
    const picture = props.pic; 
    const heading = props.h3Choice; 
    const t = props.title; 
    const a = props.age; 
    const b = props.breed;
    const funF = props.funFact; 

  return (
    <>
  
  <div className='Mobile-Icon-box'>
    <div style={bStyle}>
        <span className="material-symbols-outlined" style={{fontSize: "50px"}}>
{picture}
</span>
</div>
    <h3 style={heading}>{t}</h3>
  {par ? <p className='Mobile-Icon-p'>{par}</p> :  <table className='Icon-table'>
    
        <tr>
            <td>Age: </td>
            <td>{a}</td>
        </tr>

        <tr>
            <td>Breed: </td>
            <td>{b}</td>
        </tr>

        <tr>
            <td>Fun Fact: </td>
            <td>{funF}</td>
        </tr>

        
    </table>
   } 
          
    
        </div>

    </>
  )
}


export default MobileIcon