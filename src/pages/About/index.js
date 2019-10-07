import React from 'react'
import profile from './images/profilePic01.png'

const About = () => {


    return(
        <>
        <div className="jumbotron jumbotron-fluid text-center" style={{backgroundColor:'#102f41'}}>
            <img src={profile} alt='code' style={{width:'300px'}} className="img-fluid align-self-center"/>        
        </div>
        
        <div className="container">
        <div className="cards row">
            <div className="col-md-6">
                <div className="card text-white mb-3 mx-auto" style={{backgroundColor:'#f0b042'}}>
                    <div className="card-header text-center">Journey <i className="fas fa-hiking"></i></div>
                    <div className="card-body">
                        <p className="card-text text-center">
                            I always knew I wanted to do "something" with computers. I never knew what
                            that "something" was or where it would take me. I only knew I wanted to build something.
                            Something creative and smart. Something I could be proud of. It wasn't easy figuring out
                            what I wanted to do. I tried out a lot of careers before I figured out my calling. </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card text-white mb-3 mx-auto" style={{backgroundColor:'#ea5642'}}>
                    <div className="card-header text-center">Coder <i className="fas fa-laptop"></i></div>
                    <div className="card-body">
                        <p className="card-text text-center">
                            I'm proud to now say I'm a full stack web developer. As a developer I use
                            my background in art, design and my instincts to build websites and projects that I can be
                            proud of. I want people to smile when they see my creations because I genuinly loved making
                            it. </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="cards row">
            <div className="col-md-6">
                <div className="card text-white mb-3 mx-3 mx-auto" style={{backgroundColor:'#4FB99F'}}>
                    <div className="card-header text-center">Activities <i className="fas fa-bicycle"></i></div>
                    <div className="card-body">
                        <p className="card-text text-center">
                            When I'm not on my computer building the next Twitter or FaceBook I'm out
                            enjoying nature. Jogging, biking, spending time with the family and watching TV. But soon as
                            my pomodoro rings its back to coding.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card text-white mb-3 mx-3 mx-auto" style={{backgroundColor:'#112F41'}}>
                    <div className="card-header text-center">Goals <i className="fas fa-flag-checkered"></i></div>
                    <div className="card-body">
                        <p className="card-text text-center">
                            To write code as often as possible and have fun doing it. Also to continue
                            to push myself to boldly go where no man has gone before. So beam me up scotty!</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default About