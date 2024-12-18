import React from 'react'
import './About.css';
import LogoImg from '../../assets/abtLogo.png';
import AbtComp from '../../components/abtComp/AbtComp';
import Excellence from '../../assets/excellence.png';
// import aboutCompData from '../../components/abtComp/AbtComp.json';
import Initiative from '../../assets/initiative.png';
import Sustainability from '../../assets/sustainability.png';
import Integrity from '../../assets/integrity.png'
function About() {
  const aboutCompData =[
    {
      "id":1,
      "header":"Excellence",
      "para":"We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
      "img":Excellence
  },
  {
      "id":2,
      "header":"Initiative",
      "para":"We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities where  for growth. We drive creativity and transformative solutions.",
      "img":Initiative
  },
  {
      "id":3,
      "header":"Sustainability",
      "para":"We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
      "img":Sustainability
  },
  {
      "id":4,
      "header":"Integrity",
      "para":"We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
      "img":Integrity
  }
  ]
  return (
    <div id="about" className='about'>
      <div className='aboutContainer'>
        <h1 className='header'>About Us</h1>
        <div className='abtVeridian'>
          <div className='inlineAbtContent'>
            <div className='leftContent'>
            <img src={LogoImg} alt='logoImg' className='logoImg' />
            </div>
            {/* About content of veridian */}
            <div className='rightContent' >
            <p className='para'>
            Veridian is an investment, management and development company based in Gibraltar. We create value in our 
            investments by leveraging our own experience, 
            using tried-and-true strategies and extensive 
            industry expertise. 
            <br />
            <br />
            <br />
            We work with our business management team to develop and implement products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this is mind.
            <br />
            <br />
            Veridian's expertise is delivered with a 
            responsible approach to our business, 
            our team, our local community, and the environment.
            </p>
            </div>
          </div>
        </div>
            {/* bottom about content */}
            <div className='bottomAbt'>
              {aboutCompData.map((item)=>(
            <AbtComp 
            key={item.id}
            header={item.header}
            para={item.para}
            img={item.img}
            />
            ))}
            </div>
        <div>
          
        </div>

      </div>
    </div>
  )
}

export default About
