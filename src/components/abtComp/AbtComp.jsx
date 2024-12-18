import React from 'react'
import './AbtComp.css';
import Excellence from '../../assets/excellence.png';
function AbtCom({header,para,img}) {
  return (
    <div className='aboutComp'>
      <div className='abtComp-leftContent'>
        <div>
        <h1 className='leftHeader'>{header}</h1>
        <p>
       {para}
        </p>
        </div>
        <div className='abtComp-rightComp'>
          <img src={img} alt={header} className='rightLogo' />
        </div>
      </div>
    </div>
  )
}

export default AbtCom
