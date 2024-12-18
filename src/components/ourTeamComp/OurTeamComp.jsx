import React from 'react'
import './OurTeamComp.css';
import Slide from '../../assets/ourTeamSlide.png';
import NameSlide from '../../assets/nameRect1.png';
function OurTeamComp({id,profile,name,position,firstPara,secondPara}) {
  return (
    <div className='ourTeamComp'>
      <div className='ourTeam-left-content'>
        <img src={Slide} alt='slide' className='ourTeamImg' />
        <img src={NameSlide} alt='nameSlide' className='nameSlide' />
        <div>
        <img src={profile} alt='profile' className='profile' />
        </div>
      </div>
      <div className='employee-name'>
        <h1
        // style={{bottom: id == 1? "20px" : 
        //   id==2 ? "10%":id==3?"10%":""
        // }}
        >{name}</h1>
        <p>{position}</p>
      </div>
      <div className='abt-team'>
        <p className='abt-firstPara'>{firstPara}
          </p>
          <p className='abt-secondPara'>
          {secondPara}
            </p>
        </div>
    </div>
  )
}

export default OurTeamComp
