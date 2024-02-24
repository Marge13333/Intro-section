import React from 'react'
import Intro from '../Components/Intro/Intro'
import Info from '../Components/Info/Info'
import Offer from '../Components/Offer/Offer'
import Notified from '../Components/Notified/Notified'
import '../Assets/Css/Main.css'

function Main() {
  return (
    <div className='Main'>
        
        <Intro/>
        <Info/>
        <Offer/>
        <Notified/>

    </div>
  )
}

export default Main
