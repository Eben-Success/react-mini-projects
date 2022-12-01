import React from 'react'
import star from '../images/Star.png'
import swimmer from '../images/swimmer.png'
import bike from '../images/mountain-bike.png'

const Card = () => {
    return (
        <div className="card" >
            <img src={swimmer} alt="group-pic" className='card--image' />
            <div className='card--stats' >
                <img src={star} alt="card--star" />
                <span>5.0</span>
                <span className='gray' >(6) .</span>
                <span className='gray' >USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold' >From $136</span> / person</p>
        </div>
    )
}

export default Card;