import React from 'react'

const Filter = (props) => {
  return (
    <div style={{margin:'4%',display:'flex',justifyContent:'space-between'}}>
        <input type='text' onChange={props.search} min={0} max={5} style={{height:'35px', border:'1px solid grey', borderRadius:'4px'}} placeholder='Search restaurants...'></input>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <p>Minimum Rating:</p>
            <input onChange={props.search} type='number' placeholder='0' style={{height:'35px' ,width:'70px'}}></input>
        </div>
    </div>
  )
}

export default Filter