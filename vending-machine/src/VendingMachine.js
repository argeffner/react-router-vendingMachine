import React from "react";
import { Link } from "react-router-dom";
import "./styles/VendingMachine.css";


function VendingMachine() {
  return (
    <div
      className="VendingMachine" >
        <div className='images'>
        <Link to="/chai-tea">
            <img src="https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/chai-tea-blend.jpg"
                 alt="Chai Tea" />
        </Link>
        <Link to="/black-tea">
            <img src="https://www.chicagotribune.com/resizer/I0FTyUddkKYn6eldLM7qn1a5RmY=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/EBVR26DRARZKP2FDUFYH2QKTSY.jpg"
                 alt="Black Tea" />
        </Link>
        <Link to="/green-tea">
            <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2016/01/gettyimages-480428951-green-tea-lucia9-opener-1470868561.jpg'
                 alt="Green Tea" />
        </Link>
        </div>
        <div className="title">
           <h1>Select a Tea you would like to drink</h1>
        </div>
    </div>
  );
}

export default VendingMachine;