import React, {useRef, useState, useEffect, useLayoutEffect} from 'react'
import webProjects from './webProjects.json'
import Card from '../../components/Card'
import Nav from '../../components/Nav'
import './styles.css'

const Websites = props => {

    const hero = useRef(null)
    const webCards = useRef(null)
    const webCardText = useRef(null)
    const [projects] = useState(webProjects)
    const [darkMode, setDarkMode] = useState(false)

    useLayoutEffect(()=> darkMode ? backgroundDark() : backgroundLight())

    const styles = {
        cardRow: {
           display: 'none',
           flexWrap: 'wrap',
           flexDirection: 'row',
           justifyContent: 'space-evenly',
        },
        darkMode: {
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'baseline'
        },
        projectText: {
           visibility: 'hidden'
        }
    }

    // This function raises and hides the hero image
    function showProjects() {
        showCards()
        projectText()
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

    function projectText() {
        webCardText.current.style.visibility = "visible"
        webCardText.current.style.transition = "ease 1.5s"
        webCardText.current.style.transform = "translate(0px, -600px)"
    }

    // This function raises and shows the first web project 
    function firstProject(){
        const projectCard1 = webCards.current.childNodes[0]
        projectCard1.style.opacity = "1"
        projectCard1.style.transition = "ease 1s"
        projectCard1.style.transform = "translate(0px, -450px)"
        projectCard1.onmouseover = ()=> projectCard1.style.width = "35rem" 
        projectCard1.onmouseout = ()=> projectCard1.style.width = "25rem" 

    }
    // This function raises and shows the first web project 
    function secondProject(){
        const projectCard2 = webCards.current.childNodes[1]
        projectCard2.style.opacity = "1"
        projectCard2.style.transition = "ease 1s"
        projectCard2.style.transform = "translate(0px, -450px)"
        projectCard2.onmouseover = ()=> projectCard2.style.width = "35rem"
        projectCard2.onmouseout = ()=> projectCard2.style.width = "25rem"
    }
    // This function raises and shows the first web project 
    function thirdProject(){
        const projectCard3 = webCards.current.childNodes[2]
        projectCard3.style.opacity = "1"
        projectCard3.style.transition = "ease 1s"
        projectCard3.style.transform = "translate(0px, -450px)"
        projectCard3.onmouseover = ()=> projectCard3.style.width = "35rem"
        projectCard3.onmouseout = ()=> projectCard3.style.width = "25rem"
    }

    function backgroundDark(){  
        const projectCard1 = webCards.current.childNodes[0]
        const projectCard2 = webCards.current.childNodes[1]
        const projectCard3 = webCards.current.childNodes[2]
        document.body.style.backgroundColor = "black"
        projectCard1.style.backgroundColor = "black"
        projectCard2.style.backgroundColor = "black"
        projectCard3.style.backgroundColor = "black"
    }
    function backgroundLight(){
        const projectCard1 = webCards.current.childNodes[0]
        const projectCard2 = webCards.current.childNodes[1]
        const projectCard3 = webCards.current.childNodes[2]
        document.body.style.backgroundColor = "white"
        projectCard1.style.backgroundColor = "white"
        projectCard2.style.backgroundColor = "white"
        projectCard3.style.backgroundColor = "white"
    }

    function enableDarkMode(){
        setDarkMode(!darkMode)
    }
    return(
        <>
        <Nav 
        bgcolor = {darkMode}
        />
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

        <div ref={webCardText} style={styles.projectText} className="container">
            <h2 className='jumbo-text'>Selected Projects</h2>
            <p className='info-text'>Hover over cards to see a video of the project</p>
            <div style={styles.darkMode}>
            <button onClick={enableDarkMode} style={{position: 'relative'}} type="button" className="moon-btn
            rounded-circle dark-btn d-flex justify-content-center">
                <i className="fas fa-moon"></i>
            </button>
            <p className='darkmode-text ml-3'>{darkMode ? 'Enable light mode' : 'Enable dark mode'}</p>
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