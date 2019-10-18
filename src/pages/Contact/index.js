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
                <div className="flip-card mb-4">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="fab fa-github-alt fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#f0b042', color: 'white', paddingTop: '40px'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>GitHub</h1> 
                        <p>View My Code</p> 
                        <a href="https://github.com/ron881212" target="_blank" style={{color:'white'}}>Here</a>
                      </div>
                    </div>
                </div>

                {/* CARD NUMBER 2 */}
                <div className="flip-card mb-4">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="fab fa-linkedin-in fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#ea5642', color: 'white', paddingTop: '40px'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>linkedIn</h1> 
                        <p>Stalk My Profile</p> 
                        <a href="https://www.linkedin.com/in/ronald-glover" target="_blank" style={{color:'white'}}>Here</a>
                      </div>
                    </div>
                </div>

                {/* CARD NUMBER 3 */}
                <div className="flip-card mb-4">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="far fa-envelope fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#4FB99F', color: 'white', paddingTop: '40px'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>Email</h1> 
                        <p>Email Me</p> 
                        <p>ron881212@gmail.com</p>
                      </div>
                    </div>
                </div>
                {/* CARD NUMBER 4 */}
                <div className="flip-card mb-4">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <i className="fas fa-phone fa-7x" style={{width:'200px',height:'200px', backgroundColor:'#2a5e9f', color: 'white', paddingTop: '40px'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>Phone</h1> 
                        <p>Send A Text</p> 
                        <p>267-584-8591</p>
                      </div>
                    </div>
                </div>
                {/* CARD NUMBER 5 */}
                <div className="flip-card mb-4">
                    <div className="flip-card-inner">
                      <div className="flip-card-front d-flex align-items-center">
                        <i className="far fa-file-alt fa-7x" style={{width:'200px',height:'200px', backgroundColor:'palevioletred', color: 'white', paddingTop: '40px'}}></i>
                      </div>
                      <div className="flip-card-back">
                        <h1>Resume</h1> 
                        <p>View My Resume</p> 
                        <a href="https://docs.google.com/document/d/10Qc_AOlqtDxt5IpgpzsDnY20XY03okb8QBHTRt4mUJE/edit?usp=sharing" target="_blank" style={{color:'white'}}>Here</a>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Contact