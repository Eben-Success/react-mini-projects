import React from 'react'
import reactjs   from '../images/reactjs-icon.png';
const Navbar = () => {
    return (
        <nav>
            <img className='nav--icon' src={Vector.png} alt="airbnb_logo" />
            <h3 className="nav--logo_text" >ReactFacts</h3>
            <h4 className='nav--title' >React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;