import React from 'react'
import "../Blackcompo/Blackcompo.css"
import compo from "../Images/compo1.png"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Blackcompo = (props) => {
  return (
    <div className='realblackcompo'>
        <div className='sub-compo'>
            <img src={props.Blackcompoimg} alt='' />
            <h3 className='h33'>{props.title1}</h3>
            <p className='p33'>{props.title2}</p>
           <div className='btn11'> <button className='btnnn'>Start free trial
                <HiOutlineArrowNarrowRight />
            </button></div>
        </div>
    </div>
  )
}

export default Blackcompo