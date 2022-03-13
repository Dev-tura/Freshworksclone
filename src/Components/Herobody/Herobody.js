import React from 'react'
import "../Herobody/Herobody.css"
import fresh from "../Images/hrimg.png"

const Herobody = () => {
  return (
        <div className='mainBG'>
          <div className='sub-main'>
          <div className='fortext'>
              <div className='text'><h1>Delight made easy</h1>
              <p>We make it fast and easy for your business to delight customers and employees.</p></div>
              <div className='btns'>
              <button className='btn1'>
                FREE TRIALS
              </button>
              <button className='btn2'>
                CONTACT SALES
              </button>
              </div>
            </div>
            <div className='forimg'>
              <img src={fresh} alt='' />
            </div>
          </div>
        </div>
  )
}

export default Herobody