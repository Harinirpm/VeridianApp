import React from 'react'
import './About.css';
import AboutLeftTop from '../../assets/aboutLeftTop.png';
import AboutLeftBottom from '../../assets/aboutLeftBottom.png';
import AboutRightTop from '../../assets/aboutRightTop.png';
import AboutRightBottom from '../../assets/aboutRightBottom.png';
function About() {
  return (
    <div id="about" className='about'>
      <div className='aboutContainer'>
        {/* <h1 className='header'>About</h1> */}
        <div className='abtImageContainer'>
          <div className='aboutLeft'>
          <img src={AboutLeftTop} alt='AboutLeftTopImg' className='aboutLeftTopImg' />
          <img src={AboutLeftBottom} alt='AboutLeftBottomImg' className='aboutLeftBottomImg' />
          </div>
          <div className='aboutRight'>
            <img src={AboutRightTop} alt='AboutRightTopImg' className='aboutRightTopImg' />
            <img src={AboutRightBottom} alt='AboutRightBottom' className='aboutRightBottomImg' />
          </div>
        </div>
        <div>
          
        </div>

      </div>
      {/* <h1>About</h1> */}
    </div>
  )
}

export default About
