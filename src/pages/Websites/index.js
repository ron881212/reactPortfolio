import React, {useRef, useState} from 'react'
// import textImg from '../../public/images/webAppImg02.png'
import webProjects from './webProjects.json'
import Card from '../../components/Card'
import './styles.css'

const Websites = props => {

    const hero = useRef(null)
    const [projects] = useState(webProjects)
    const styles = {
        cardRow: {
           display:'flex',
           flexDirection: 'row' ,
           flexWrap: 'wrap',
           justifyContent: 'space-evenly',

        }
    }

    function showProjects() {
        hero.current.style.transition = "ease 1s"
        hero.current.style.transform = "translate(0px, -300px)"
    }

    return(
        <>
        <div ref={hero} className="container">
            <img src="/images/webAppImg02.png" alt='code' className="img-fluid"/>
            <h2 className='jumbo-text text-center'>All Web Apps below are full stack</h2>
            <p className='text-center info-text'>Click Below to see Projects</p>
            <div className="d-flex justify-content-center">
            <button onClick={showProjects} type="button" className="btn btn-primary btn-lg rounded-circle start-btn d-flex justify-content-center"><i className="fas fa-desktop fa-2x "></i></button>
            </div>
        </div>

        <div style={styles.cardRow}> 
            {projects.map(card => (
                <Card 
                name = {card.name}
                picture = {card.picture}
                />
            ))}
        </div> 
        </>
    )
}

export default Websites