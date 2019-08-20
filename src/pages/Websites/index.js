import React from 'react'
import textImg from '../../images/webAppImg02.png'
import './styles.css'

// This page contains large hero image, cards, buttons, and maybe redux or card info

const Websites = () => {

    return(
        <div className="container">
            <img src={textImg} alt='code' className="img-fluid"/>
            <h2 className='jumbo-text text-center'>All Web Apps below are full stack</h2>
            <p className='text-center info-text'>Click Below to see Projects</p>
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-lg rounded-circle start-btn d-flex justify-content-center"><i className="fas fa-desktop fa-2x "></i></button>
            </div>
        </div>

    )
}

export default Websites