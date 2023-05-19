import React from 'react'
import data from '../data.json'
export default function Summary() {
    const items = data.map(item=>{
        /**
         * This is based on the Vite docs page about handling static assets.
         * https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
         * 
         * There are other ways to accomplish this as well, but this is one way
         * that works without having to move the images to a different location.
         * (I.e. a "public" folder, as explained here:
         * https://vitejs.dev/guide/assets.html#the-public-directory)
         */
        const imageUrl = new URL(`../images/${item.icon}`, import.meta.url).href
        return (
            <div key={item.id} className={`summary-details item-${item.id}`}>
                <div className="left">
                    <span className="icon">
                        <img src={imageUrl} alt="" />
                    </span>
                    <span className="category">{item.category}</span>
                </div>
                <div className="">
                    <span className="marking">
                        <span className="obtained">{item.score}</span>{" "}
                        <span className="from"> / 100</span>
                    </span>
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
