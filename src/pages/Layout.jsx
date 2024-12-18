import React from 'react'
import Topbar from '../components/Navbar/Topbar'
import UseWindowDim from '../utils/UseWindowDim'
import { Outlet } from 'react-router-dom';
import Home from './home/Home';
import About from './About/About';
import Our_Team from './ourTeam/Our_Team';
import Investment from './investment/Investment';
import ContactUs from './contact/ContactUs';
import usePageStore from '../pageSlice/pageSlice';
function Layout() {
    // const {width, height} = UseWindowDim();
  return(
    <div>
      <Topbar />
      {/* <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="our-team">
        <Our_Team />
      </div>
      <div id="investment">
        <Investment />
      </div>
      <div id="contact">
        <ContactUs />
      </div> */}
    </div>

  // <div>{renderPage()}</div>
  )
}

export default Layout
