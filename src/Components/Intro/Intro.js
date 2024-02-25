import React from 'react'
import './intro.css';

function Intro() {
  return (
    <section className='intro-section'>
        <div className='intro-wrapper'>
          <div className='header'>
           <img className="Logo" src={require('../../Assets/Images/logo.svg').default} alt="main-img" />
        </div>
          <div className='intro-main'>
          <div className="intro-bg bg-none">
                <img className="bg" src={require('../../Assets/Images/Group 31.svg').default} alt="Bg 1" />
              </div>
              <div className="intro-bg intro-bg-none">
                <img className="bg" src={require('../../Assets/Images/Group 4.svg').default} alt="Bg 1" />
              </div>
              <div className="intro-mainText">
              <img className="bg-line bg" src={require('../../Assets/Images/Path 2.svg').default} alt="Bg 1" />
                <div className="intro-MainText-bg">
                   <div className="intro-main-texts">
                   <h1 className='intro-mainText'>Get paid for the work you <h1 className='intro-mainText color-blue'>love</h1> to do.</h1>
                    <p className='intro-text'>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
                    <img className="mouse" src={require('../../Assets/Images/Group.svg').default} alt="Bg 1" />
                   </div>
                </div>
              </div>
              <div className="intro-bg-2 intro-bg-none" >
                <img className="bg" src={require('../../Assets/Images/Group 5.svg').default} alt="Bg 1" />
              </div>
            </div>
        </div>
    </section>
  )
}
export default Intro
