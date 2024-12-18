import React from 'react'
import './Home.css';
import usePageStore from '../../pageSlice/pageSlice';
import CenterRect from '../../assets/centerRect.png';
import LeftImage from '../../assets/left.png'
import RightImg from '../../assets/right.png';
import { FiCornerRightDown } from "react-icons/fi";
export default function Home() {
  const currentPage = usePageStore((state)=>state.currentPage);
  return (
    <div id="home" className='home'>
      <div className='imageContainer'>
        <div className='top-image'>
          <img src={LeftImage} alt="leftImage" className='side-image'/>
          <img src={RightImg} alt='rightImage' className='side-image' />
        </div>
        <div className='main-image-container'>
          {/* <img src={CenterRect} alt='mainImage' className='main-image'/> */}
        </div>
          <div className='top-content'>
            <p>INVESTMENT MANAGEMENT</p>
          </div>
          <div className='mid-content'>
            <h1>Empowering Investment with Expertise and Strategy</h1>
          </div>
          <div className='btn'>
            <button className='bottom-btn'>
              Know more <FiCornerRightDown className='arrow-icon'/>
            </button>
          </div>
      </div>
    </div>
  )
}
