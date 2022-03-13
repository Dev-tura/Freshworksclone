import React from 'react'
import quote12 from "../Images/tur.png"
import waterstonss12 from "../Images/Thirdscroll.png"
import quote21 from "../Images/nor.png"
import "../Thirdwater/Thirdwater.css"

const Thirdwater = () => {
  return (
    <div className='Thirdmain'>
        <div className='spacesss'>
          <div className='waterstonsss11'>
              <img className='quotee11' src={quote12} alt='' />
              <img src={waterstonss12} alt='' />
              <img className='quo11' src={quote21} alt='' />
          </div>
              <div className='waterstonssstxt11'>
                  <p className='p1'>“Because we're managing and handling tickets faster, satisfaction skyrocketed. 98% of the users say they are 'extremely satisfied' after handling a ticket, and give us a smiley face.”</p>
                  <p className='pee11'>Alex Anheuer, Manager Workplace Services, Payvision</p>
              </div>     
        </div>
    </div>
  )
}

export default Thirdwater