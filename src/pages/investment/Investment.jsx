import React from 'react'
import './Investment.css';
import InvestmentComp from '../../components/investmentComp/InvestmentComp';
import Strategy from'../../assets/strategy.png';
import Portfolio from '../../assets/portfolio.png';
import Responsibility from '../../assets/responsibility.png';
function Investment() {
   const investmentData = [
          {
              id:1,
              image:Strategy,
              title:'Investment focus and strategy',
              firstPara:"Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.",
              secondPara:"Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth."
          },
          {
              id:2,
              image:Portfolio,
              title:'Portfolio',
              firstPara:"The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
              secondPara:"Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again."
          },
          {
              id:3,
              image:Responsibility,
              title:'Corporate social responsibility',
              firstPara:"Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
              secondPara:""
          },
      ]
  return (
    <div className='investment'>
      <div className='top-Header'>
        <h1 className='title'>Holistic Investment Approach</h1>
        <div className='approach'>
        {investmentData.map((item)=>(
          <InvestmentComp 
          key={item.id} 
          image={item.image}
          title={item.title}
          firstPara={item.firstPara}
          secondPara={item.secondPara}
          />
        ))}
        </div>
      </div>
       
    </div>
  )
}

export default Investment
