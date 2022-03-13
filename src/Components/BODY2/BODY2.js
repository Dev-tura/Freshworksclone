import React from "react";
import man from '../Images/Man-boy.png';
import "../BODY2/BODY2.css"
import Card from "../Card/Card";


const BODY2 = () => {
    return (
        <div className="Bodyholder">
            <div className="Bodyhold">
                <div className="bodyimg">
                    <img src={man} alt='' />
                </div>
                <div className="bodytext">
                    <h2>Try the business software used by over 50,000 companies across the globe to exceed customer and employee expectations.</h2>
                    <div className="mycards">
                    <div className="Cardgroup">
                        <Card CardTitle="Customer Service" />
                        <Card CardTitle="HR Management" />
                        <Card CardTitle="Marketing Automation" />
                    </div>
                    <div className="Cardgroup">
                        <Card CardTitle="IT Service Management" />
                        <Card CardTitle="Sales Automation" />
                        <Card CardTitle="All Products&Trials" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BODY2