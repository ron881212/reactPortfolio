import React from 'react'
import Nav from '../../components/Nav'
import contactImg from './images/contactMe05.png'
import './styles.css'

const Contact = () => {


    return(
        <>
        <Nav />
        <div className="container pt-5">
            <img src={contactImg} alt='code' className="img-fluid"/>
            <div className="d-flex justify-content-around flex-wrap mt-5">
            
                {/* CARD NUMBER 1 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="fab fa-github-alt fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#f0b042'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>GitHub</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                      </div>
                    </div>
                </div>

                {/* CARD NUMBER 2 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="fab fa-linkedin-in fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#ea5642'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>linkedIn</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                      </div>
                    </div>
                </div>

                {/* CARD NUMBER 3 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="far fa-envelope fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#4FB99F'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>Email</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                      </div>
                    </div>
                </div>
                {/* CARD NUMBER 4 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="fas fa-phone fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#2a5e9f'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>Phone</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                      </div>
                    </div>
                </div>
                {/* CARD NUMBER 5 */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="far fa-file-alt fa-7x" style={{width:'200px',height:'200px', backgroundColor:'palevioletred'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>Resume</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Contact