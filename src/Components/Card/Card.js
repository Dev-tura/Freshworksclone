import React from 'react'
import "../Card/Card.css"
import {RiArrowRightUpLine} from "react-icons/ri"

const Card = (pops) => {
  return (
    <div className='cardbutton'>
        <div className='btnhold'>
        <p> {pops.CardTitle} </p>
        <div className='arroww'>
            <RiArrowRightUpLine />
        </div>
        </div>
    </div>
  )
}

export default Card