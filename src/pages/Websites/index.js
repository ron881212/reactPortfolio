import React, {useRef, useState} from 'react'
import webProjects from './webProjects.json'
import Card from '../../components/Card'
import './styles.css'

const Websites = props => {

    const hero = useRef(null)
    const webCards = useRef(null)
    const [projects] = useState(webProjects)
    const styles = {
        cardRow: {
           display: 'none',
           flexWrap: 'wrap',
           marginTop: '200px',
           flexDirection: 'row' ,
           justifyContent: 'space-evenly',
        }
    }

    // This function raises and hides the hero image
    function showProjects() {
        showCards()
        hero.current.style.opacity = "0"
        webCards.current.style.display = "flex"
        hero.current.style.transition = "ease 1s"
        hero.current.style.transform = "translate(0px, -300px)"
    }
    // This function lowers and show the hero image
    // function hideProjects() {
    //     hero.current.style.opacity = "1"
    //     hero.current.style.transition = "ease 1s"
    //     hero.current.style.transform = "translate(0px, 300px)"
    //     hideCards()
    // }

    // This function causes animation effect
    function showCards() {
        setTimeout(firstProject, 300)
        setTimeout(secondProject, 500)
        setTimeout(thirdProject, 700)
    }

    // This function raises and shows the first web project 
    function firstProject(){
        const projectCard1 = webCards.current.childNodes[0]
        projectCard1.style.opacity = "1"
        projectCard1.style.transition = "ease 1s"
        projectCard1.style.transform = "translate(0px, -400px)"
        projectCard1.onmouseover = ()=> projectCard1.style.width = "30rem" 
        projectCard1.onmouseout = ()=> projectCard1.style.width = "25rem" 

    }
    // This function raises and shows the first web project 
    function secondProject(){
        const projectCard2 = webCards.current.childNodes[1]
        projectCard2.style.opacity = "1"
        projectCard2.style.transition = "ease 1s"
        projectCard2.style.transform = "translate(0px, -400px)"
        projectCard2.onmouseover = ()=> projectCard2.style.width = "30rem"
        projectCard2.onmouseout = ()=> projectCard2.style.width = "25rem"
    }
    // This function raises and shows the first web project 
    function thirdProject(){
        const projectCard3 = webCards.current.childNodes[2]
        projectCard3.style.opacity = "1"
        projectCard3.style.transition = "ease 1s"
        projectCard3.style.transform = "translate(0px, -400px)"
        projectCard3.onmouseover = ()=> projectCard3.style.width = "30rem"
        projectCard3.onmouseout = ()=> projectCard3.style.width = "25rem"
    }

    return(
        <>
        <div ref={hero} className="container">
            <img src="/images/webAppImg02.png" alt='code' className="img-fluid"/>
            <h2 className='jumbo-text text-center'>All Web Apps below are full stack</h2>
            <p className='text-center info-text'>Click Below to see Projects</p>
            <div className="d-flex justify-content-center">
            <button onClick={showProjects} type="button" className="btn btn-primary btn-lg 
            rounded-circle start-btn d-flex justify-content-center">
                <i className="fas fa-desktop fa-2x "></i>
            </button>
            </div>
        </div>

        <div ref={webCards} style={styles.cardRow}> 
            {projects.map((card, index) => (
                <Card 
                key = { index }
                name = {card.name}
                picture = {card.picture}
                />
            ))}
        </div> 
        </>
    )
}

export default Websites