import React from 'react'
import './InvestmentComp.css'
function InvestmentComp({image,title,firstPara,secondPara}) {
  return (
    <div className='investment-comp'>
      <div className='main-container'>
        <div className='topImg'>
            <img src={image} alt={title} className='titleImg'/>
        </div>
        <div className='bottom-content'>
            <h1>{title}</h1>
            <p>{firstPara}
                <br />
                </p>
                <p>
                {secondPara}
                </p>
                
        </div>
      </div>
    </div>
  )
}

export default InvestmentComp
