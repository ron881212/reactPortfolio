import React from 'react'
import profile from './images/profilePic01.png'

const About = () => {


    return(
        <div className="jumbotron jumbotron-fluid d-flex justify-content-center" style={{backgroundColor:'white'}}>
            <img src={profile} alt='code' style={{width:'300px'}} className="img-fluid"/>            
        </div>
    )
}

export default About