import React from 'react'
import "./Offer.css"
function Offer() {
  return (
    <section className='Offer'>
        <div className="wrapper">
        <div className="offer-head">
          <h2 className='Offer-headline'>Our pricing plans</h2>
          <p className='offer-head-para'>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
        </div>
        <div className="offer-wrapper">
            <div className="offer-box transition">
              <img className="offer-icons-img" src={require('../../Assets/Images/Group 18.svg').default} alt="main-img" />
              <h5 className='offer-name'>Dip your toe</h5>
              <p className='offer-desc'>Just getting started? No problem at all! Our free plan will take you a long way.</p>
              <div className='offer-prices'>
                <h3 className='main-price'>Free</h3>
                <img className="offer-icons" src={require('../../Assets/Images/Group 27.svg').default} alt="main-img" />
              </div>
            </div>
            <div style={{backgroundColor: "#3EE9E5"}} className="offer-box box-height">
              <img className="offer-icons-img" src={require('../../Assets/Images/Group 20.svg').default} alt="main-img" />
              <h5 className='offer-name' style={{color: "#080C20"}}>Dive right in</h5>
              <p className='offer-desc' style={{color: "#080C20"}}>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
              <div className='offer-prices'>
                <h3 className='main-price' style={{color: "#080C20"}}>$25.00 <h6 className='main-price month'>/month</h6></h3>
                <img className="offer-icons" src={require('../../Assets/Images/Group 27 Copy.svg').default} alt="main-img" />
              </div>
            </div>
        </div>

        </div>
        
    </section>
  )
}

export default Offer
