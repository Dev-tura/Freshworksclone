import React from 'react'
import "../Fourcards/Fourcards.css"
import fourone from '../Images/four-1.jpg';
import fourtwo from '../Images/four-2.png';
import fourthree from '../Images/four-3.jpg';
import fourfour from '../Images/four-4.jpg';

const Fourcards = () => {
  return (
    <div className='Fourcardsmain'>
        <div>
            <h1 className='mainH'>We aspire to be one of the most loved companies in the world</h1>
        </div>
        <div className='allfour'>
            <div className='f1'>
            <img src={fourone} alt='' />
            <h1 className='hh'>Culture</h1>
            <p className='fp'>A culture that supports high-quality work, joy and pride in that work, speed to execution, and intense customer focus.</p>
            </div>
            <div className='f1'>
            <img src={fourtwo} alt='' />
            <h1 className='hh'>diversity</h1>
            <p className='fp'>Full-spectrum diversity, equity, and inclusion are key priorities for us.</p>
            </div>
            <div className='f1'>
            <img src={fourthree} alt='' />
            <h1 className='hh'>experience</h1>
            <p className='fp'>Focus on enhancing the team experience by strengthening our managers’ leadership capabilities.
            </p>
            </div>
            <div className='f1'>
            <img src={fourfour} alt='' />
            <h1 className='hh'>Team</h1>
            <p className='fp'>4,000 employees and growing in offices across India, US, Europe, and Australia.</p>
            </div>
        </div>
        <div className='btn12'>
          <button className='btn22'>SEE LIFE AT FRESH WORKS</button></div>
    </div>
  )
}

export default Fourcards