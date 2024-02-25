import React from 'react'
import { useState } from "react";

import "./Notified.css"
function Notified() {
  const [emailError,setEmailError] = useState('')
  const [errorRed,setErrorRed] = useState('')
  const [search,setSearch] =useState('')
  const ClickSubmit = (e) =>{
    try{
      e.preventDefault() // prevent make request
      setEmailError('')
      if(!search ){
        setEmailError('Required')
        setErrorRed("red")
        return
      }
    } catch(e){
    }
  }
  return (
   <section className='Notified'>
    <div className="Notified-wrapper">
      <img className="Path" src={require('../../Assets/Images/Path 4.svg').default} alt="main-img" />
      <div className='Notified-box'>
        <h2 className='notified-title'>Get notified when we launch</h2>
        <div className='notified-input-wrap'>
        <form className='form' >
          <input
        
          type='text'
          id='email'
          placeholder='Email address'
          className='email'
          value={search} onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className='button'type='button' onClick={ClickSubmit}>Get notified</button>
         </form>
         <span className='error'>{emailError}</span>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Notified
