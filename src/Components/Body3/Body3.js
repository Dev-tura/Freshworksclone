import React from 'react'
import Blackcompo from '../Blackcompo/Blackcompo'
import "../Body3/Body3.css"
import compo from "../Images/compo1.png"
import compo2 from "../Images/compo2.png"
import compo3 from "../Images/compo3.png"
import compo4 from "../Images/compo4.png"

const Body3 = () => {
  return (
    <div className='Mainbody3'>
        <div className='sub-body3'>
            <div className='textt'>
                <div className='h2'>Frictionless, simple, easy</div>
        <p>Freshworks makes it fast and easy for businesses to delight their customers and employees.<br></br>

We take a fresh approach to how businesses discover, engage with, and realize value from software throughout their journey.</p></div>
        </div>
        <div className='fourcards'>
            <div className='twocards'>
            <Blackcompo Blackcompoimg={compo}
            title1='Get up and running with no barriers'
            title2='Try or purchase our software directly from our website, and onboard in a matter of days, not months.'/>
            <Blackcompo Blackcompoimg={compo2}
            title1='Build and customize as you go'
            title2='Extend and tailor experiences to meet your unique business needs, with low-code development and over 1,100 custom apps made available on our marketplace.
            '/>
            </div>
            <div className='twocards'>
            <Blackcompo Blackcompoimg={compo3}
            title1='Choose your pricing plan'
            title2='Our pricing plans are designed for modern business use cases and affordable for organizations of all sizes.'/>
            <Blackcompo Blackcompoimg={compo4}
            title1='Create value, fast'
            title2='Accelerate your team’s productivity and efficiency with modern automation and collaboration tools, to get tangible results in no time.'/>
            </div>
        </div>
    </div>
  )
}

export default Body3