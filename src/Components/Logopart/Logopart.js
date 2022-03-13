import React from 'react'
import "../Logopart/Logopart.css"
import pearson from "../Images/pearson.png"
import brewdog from "../Images/brewdog.png"
import bridgeston from "../Images/bridgestone.png"
import travix from "../Images/travix.png"
import klarna from "../Images/klarna.png"
import vice from "../Images/vice.png"
import deichmann from "../Images/deichmann.png"
import waterstons from "../Images/waterstons.png"
import fiverr from "../Images/fiverr.png"
import exabytes from "../Images/exabytes.png"
import schoeller from "../Images/schoeller.png"
import multichoice from "../Images/multichoice.jpg"
import bluenile from "../Images/bluenile.png"
import trainline from "../Images/trainline.png"
import volkers from "../Images/volkers.jpg"
import itv from "../Images/itv.jpg"
import deliveryhero from "../Images/deliveryhero.png"

import katz from "../Images/katz.png"
// import quote1 from "../Images/tur.png"
// import waterstonss from "../Images/waterstons.png"
// import quote2 from "../Images/nor.png"


const Logopart = () => {
  return (
    <div className='Logopartmain'>
        <div className='Logopartspace'>
            <div className='Logoparttxt'>
                <h1>Trusted by 50K+ customers big and small</h1>
                <p>We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to companies of all sizes. Businesses from more than 120 countries around the world use Freshworks’ products to delight their customers and employees every day. </p>
            </div>
            <div className='Logopartimg'>
                <div className='img1'>
                <img className='pear' src={pearson} alt='' />
                <img src={brewdog} alt='' />
                <img src={bridgeston} alt='' />
                <img src={travix} alt='' />
                <img src={klarna} alt='' />
                <img src={vice} alt='' />
                </div>
                <div className='img1'>
                <img className='deich' src={deichmann} alt='' />
                <img className='water' src={waterstons} alt='' />
                <img src={fiverr} alt='' />
                <img src={exabytes} alt='' />
                <img src={schoeller} alt='' />
                <img src={multichoice} alt='' />
                </div>
                <div className='img1'>
                <img className='blue' src={bluenile} alt='' />
                <img src={trainline} alt='' />
                <img src={volkers} alt='' />
                <img className='itv' src={itv} alt='' />
                <img src={deliveryhero} alt='' />
                <img className='kat' src={katz} alt='' />
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Logopart