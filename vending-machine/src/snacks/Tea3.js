import React from 'react';
import {Link} from 'react-router-dom';
import './Tea.css';

function Green() {
    return (
        <div className='green'>
            <h1> Green Tea </h1>
            <div className="fluid"></div>
            <div className="Tea"> 
            </div> 
            <h1><Link className='btm' to="/">Back to Vender</Link></h1>
        </div>
    )
}

export default Green;