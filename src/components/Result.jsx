import React from 'react'

function Result() {
  return (
    <div className='result'>
        <h1>Your Result</h1>
        <div className='score'>
            <p className='score-got'>76</p>
            <p className='score-from'>of 100</p>
        </div>
        <h2 className='remark'>Great</h2>
        <p className='performance-detail'>
            You scored higher than 65% of the people who have taken these tests.
        </p>
      
    </div>
  )
}

export default Result