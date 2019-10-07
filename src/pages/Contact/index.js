import React from 'react'
import Nav from '../../components/Nav'
import contactImg from './images/contactMe05.png'

const Contact = () => {


    return(
        <>
        <Nav />
        <div className="container pt-5">
            <img src={contactImg} alt='code' className="img-fluid"/>
            <div className="d-flex justify-content-center">

            {/* contact cards go here */}
            
            </div>
        </div>
        </>
    )
}

export default Contact