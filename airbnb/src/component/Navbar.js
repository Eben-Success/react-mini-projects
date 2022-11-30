import React from 'react'
import logo   from '../images/Vector.svg'
const Navbar = () => {
    return (
        <nav className='nav-bar' >
            <img className='nav--logo' src={logo} alt="airbnb_logo" />
        </nav>
    )
}

export default Navbar;