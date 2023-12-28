import React from 'react'

const Filter = () => {
  return (
    <div style={{margin:'4%',display:'flex',justifyContent:'space-between'}}>
        <input type='text' style={{height:'35px', border:'1px solid grey', borderRadius:'4px'}} placeholder='Search restaurants...'></input>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <p>Minimum Rating:</p>
            <input type='number' style={{height:'35px' ,width:'70px'}}></input>
        </div>
    </div>
  )
}

export default Filter