import React from 'react'
import quote1 from "../Images/tur.png"
import waterstonss from "../Images/waterstons.png"
import quote2 from "../Images/nor.png"
import "../Waaterstons/Waaterstons.css"

const Waaterstons = () => {
  return (
    <div className='waatermain'>
        <div className='spacess'>
          <div className='waterstonsss'>
              <img className='quotee' src={quote1} alt='' />
              <img src={waterstonss} alt='' />
              <img className='quo' src={quote2} alt='' />
          </div>
              <div className='waterstonssstxt'>
                  <p className='p1'>“The Freshworks team was a great asset during implementation and continue to be a key partner for Waterstons as we look to further mature and improve our services to customers, tailored to their specific needs.”</p>
                  <p className='pee'>Alex Bookless, Head of Managed Services, Waterstons</p>
              </div>     
        </div>
    </div>   
  )
}

export default Waaterstons