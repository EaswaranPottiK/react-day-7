import React, { useState } from 'react'

const OneCard = (prop) => {

   
  return (
    <div style={{minWidth:'30%',color:'#1F2937',border:'2px solid #F3F4F6',borderRadius:'8px',paddingTop:'5px',marginBottom:'10px'}}>
        <div style={{display:'flex',alignItems:'center', gap:'10px',paddingLeft:'20px',paddingBottom:'5px'}}>
            <p style={{fontSize:'20px',fontWeight:'600'}}>{prop.name}</p>
            <div>{prop.rating}</div>
        </div>
        <p style={{color:'#4B5563', paddingLeft:'15px',paddingBottom:'5px',display:'flex'}}><span class="material-symbols-outlined">location_on</span>{prop.address}</p>
        <p style={{color:'#4B5563', paddingLeft:'20px'}}>{prop.postcode}</p>
        <br></br>
        <div style={{backgroundColor:'rgb(243 244 246',padding:'20px',boxShadow:' 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)'}}>
            <div style={{color:'#22C55E',display:'flex',alignItems:'center'}}>
                <span class="material-symbols-outlined">restaurant</span>
                {prop.type}
            </div>
            <div style={{color:'#3B82F6',cursor:'pointer',marginTop:'5px'}}>Visit Menu</div>
        </div>
    </div>
  )
}

export default OneCard