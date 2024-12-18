import React, { useEffect, useState } from 'react';
import './Topbar.css';
import usePageStore from '../../pageSlice/pageSlice';
import UseWindowDim from '../../utils/UseWindowDim';
import Logo from '../../assets/veridianLogo.png';
import Home from '../../pages/home/Home';
import About from '../../pages/About/About';
import Our_Team from '../../pages/ourTeam/Our_Team';
import Investment from '../../pages/investment/Investment';
import ContactUs from '../../pages/contact/ContactUs';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
function Topbar() {
    const {width} = UseWindowDim();
    //Zustand hook page update.
    const setCurrentPage = usePageStore((state)=>state.setCurrentPage);
    const currentPage = usePageStore((state) => state.currentPage);
    //Function to handle and to update the page in Zustand and scroll the page by using the ID.
    const [menuOpen, setMenuOpen] = useState(false);
    const handlePageScroll = (e,page) => {
      e.preventDefault();
        setCurrentPage(page);
        const section = document.getElementById(page);
        if(section){
          section.scrollIntoView({behavior:"smooth"});
        }
        else{
          console.error(`Section Id ${page} is not found!`);
        }
        setMenuOpen(false);
    };
console.log(currentPage,setCurrentPage);
//here i update the width dynamically within the css.
    useEffect(()=> {
        document.documentElement.style.setProperty('--dynamic-width', `${width}px`);
    },[width]);

    return (
      <>
    <div className='TopNav'>
        <div className='Header'>
        <div className='Header-img'>
            <img src={Logo} alt='logo'className='logo'/>
        </div>
        <div className='menu-container'>
          <div className='menu-toggle'
          onClick={()=>setMenuOpen(!menuOpen)}
          >
            {menuOpen ?
             (
              <IoMdClose className='menu-icon'/>
            ) : 
            (<IoMdMenu className='menu-icon' />
            )}
          </div>
        </div>
        <div>
            <nav className={`Header-text ${menuOpen?"show-menu":""}`}>
            
            <a
              href="#home"
              className={`nav-links ${currentPage === "home" ? "active" : ""}`}
              onClick={(e)=>handlePageScroll(e,"home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-links ${currentPage === "about" ? "active" : ""}`}
              onClick={(e)=>handlePageScroll(e,"about")}
            >
              About Us
            </a>
            <a
              href="#our-team"
              className={`nav-links ${currentPage === "our-team"?"active":""}`}
              onClick={(e)=>handlePageScroll(e,"our-team")}
            >
              Our Team
            </a>
            <a
              href="#investment"
              className={`nav-links ${currentPage === "investment"? "active":""}`}
              onClick={(e)=>handlePageScroll(e,"investment")}
            >
              Investment Approach
            </a>
            <a
              href="#contact"
              className={`nav-links ${currentPage==="contact"?"active":""}`}
              onClick={(e)=>handlePageScroll(e,"contact")}
            >
              Contact Us
            </a>
          </nav>
        </div>
        </div>
    </div>
    
    <div id="home">
            <Home />
          </div>
          <div className='bgd'>
          <div id="about">
            <About />
          </div>
          <div id="our-team">
            <Our_Team />
          </div>
          </div>
          <div id="investment">
            <Investment />
          </div>
          <div id="contact">
            <ContactUs />
          </div>
          </>
)
}

export default Topbar;
