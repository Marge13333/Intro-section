import React from 'react'
import "./Info.css"

function Info() {
  return (
   <section className='Info'>
    <div className="info-wrapper">
        <div className="info-box box-up">
            <div className="info-box-Img">
               <img className="box-Img" src={require('../../Assets/Images/easter_egg_ 3.svg').default} alt="Bg 1" />
            </div>
            <div className='info-texts'>
                <h3 className='info-mainText'>Indulge your passions</h3>
                <p className='info-text'>Your passions shouldn't be just for the weekend. Earn a living doing what you love.</p>
            </div>
        </div>
        <div className="info-box">
            <div className="info-box-Img">
               <img className="box-Img" src={require('../../Assets/Images/money_jar 2.svg').default} alt="Bg 1" />
            </div>
            <div className='info-texts'>
                <h3 className='info-mainText'>Gain financial freedom</h3>
                <p className='info-text'>Start making money work for you. There’s nothing quite like earning while you sleep. </p>
            </div>
        </div>
        <div className="info-box box-up">
            <div className="info-box-Img">
               <img className="box-Img"style={{marginLeft: "-5px"}} src={require('../../Assets/Images/cocktail_ 2.svg').default} alt="Bg 1" />
            </div>
            <div className='info-texts'>
                <h3 className='info-mainText'>Choose your lifestyle</h3>
                <p className='info-text'>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</p>
            </div>
        </div>
        <div className="info-box">
            <div className="info-box-Img">
               <img className="box-Img"  style={{marginLeft: "-15px"}}src={require('../../Assets/Images/road_trip 2.svg').default} alt="Bg 1" />
            </div>
            <div className='info-texts'>
                <h3 className='info-mainText'>Work from anywhere</h3>
                <p className='info-text'>Selling online means not being pinned down. Want to work AND travel? Go for it!</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Info
