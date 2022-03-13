import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import {BsGlobe2} from "react-icons/bs"
import fresh from "../Images/freshworks.svg"
import "../Header/Header.css"
import {GoThreeBars} from "react-icons/go"


const Header = () => {
    return (
        <div className='Headermain'>
            <div className='Headerhold'>
            <div className='logo'>
                <img src={fresh} alt='' />
            </div>
            <div className='nav'>
                <div className='smallnavs'>
                <span>Product</span>
                <RiArrowDropDownLine />
                </div>
                <div className='smallnavs'>
                <span>Platform</span>
                <RiArrowDropDownLine />
                </div>
                <div className='smallnavs'>
                <span>Company</span>
                <RiArrowDropDownLine />
                </div>
                <div className='smallnavs'>
                <span>Resources</span>
                <RiArrowDropDownLine />
                </div>
                <div className='smallnavs'>
                <span>Customers</span>
                <RiArrowDropDownLine />
                </div>
                <div className='smallnavs'>
                <span>Support</span>
                <RiArrowDropDownLine />
                </div>
                <div className='smallnavs'>
                <BsGlobe2 />
                </div>
            </div>
            <div className='bar'>
                <GoThreeBars color='#fff' />
            </div>
            </div>
        </div>
    )
}

export default Header