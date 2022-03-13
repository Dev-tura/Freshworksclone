import React from 'react'
import quote11 from "../Images/tur.png"
import waterstonss1 from "../Images/secondscroll.jpg"
import quote22 from "../Images/nor.png"
import "../Secondwater/Secondwater.css"

const Secondwater = () => {
  return (
    <div className='Secondwatermain'>
        <div className='spacess1'>
          <div className='waterstonsss1'>
              <img className='quotee1' src={quote11} alt='' />
              <img src={waterstonss1} alt='' />
              <img className='quo1' src={quote22} alt='' />
          </div>
              <div className='waterstonssstxt1'>
                  <p className='p1'>“For PhonePe, Freddy fetches context from the transactions made and offers contextual assistance for a personalized self-service experience from right within the app. We have been using it for a year and can confidently say that we have accomplished most of what we had in mind.”</p>
                  <p className='pee1'>Vishal Gupta, Head of Product, PhonePe</p>
              </div>     
        </div>
    </div>
  )
}

export default Secondwater