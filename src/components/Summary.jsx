import React from 'react'
import data from '../data.json'
export default function Summary() {
    const items = data.map(item=>{
        return(
            
        <div key={item.id} className= {`summary-details item-${item.id}`}>
            <div className='left'>
                <span className='icon'> 
                <img src={item.icon} alt="" />
                </span>
                <span className='category'>{item.category}</span>
            </div>
            <div className=''>
                <span className='marking'><span className='obtained'>{item.score}</span> <span className='from'> / 100</span></span>
            </div>
        </div>
        )
    })
  return (
    <div className='summary'>
        <h3>Summary</h3>
        
        {items}
        
        <button>Continue</button>
    </div>
  )
}
