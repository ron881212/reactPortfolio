import React, {useRef, useState, useLayoutEffect} from 'react'
import webProjects from './webProjects.json'
import Card from '../../components/Card'
import Nav from '../../components/Nav'
import VideoTron from '../../components/Video'
import WebAppImg from '../../../public/images/webAppImg02.png'
import './styles.css'
// add homepage img as import to get it to work
// fix padding for responsiveness
// crop github img for aboutMe page
// use flip cards for contactMe page
// create css iphone for app video container

const Websites = () => {

    const hero = useRef(null)
    const webCards = useRef(null)
    const webCardText = useRef(null)
    const sampleWebsite = useRef(null)
    const [projects] = useState(webProjects)
    const [videoPath, setVideoPath] = useState(null)
    const [videoTitle, setVideoTitle] = useState(null)
    const [visit, setVisit] = useState(null)
    const [viewCode, setViewCode] = useState(null)
    const [feature, setFeature] = useState(null)
    const [darkMode, setDarkMode] = useState(false)
    const [previews, setPreviews] = useState(false)
    
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
    function autoScroll() {
        const scrollToRef = (ref) => window.scrollTo({top:ref.current.offsetTop / 1.5, left:0, behavior: 'smooth'})
        scrollToRef(webCards) 
    }
    function setNewVideo(newVideo, newFeature, newVideoTitle, newVisit, newViewCode){
        setPreviews(true)
        setVisit(newVisit)
        setViewCode(newViewCode)
        setFeature(newFeature)
        setVideoPath(newVideo)
        setVideoTitle(newVideoTitle)
        setTimeout(autoScroll, 300) 
        setTimeout(()=>sampleWebsite.current.play(), 500) 
    }
    return(
        <>
        <Nav 
        bgcolor = {darkMode}
        />
        {/* <div className="jumbotron jumbotron-fluid mb-0"> */}
        <div ref={hero} className="container pt-5">
            <img src={WebAppImg} alt='code' className="img-fluid"/>
            <h2 className='jumbo-text text-center'>All Web Apps below are full stack</h2>
            <p className='text-center info-text'>Click Below to see Projects</p>
            <div className="d-flex justify-content-center">
            <button onClick={showProjects} type="button" className="btn btn-primary btn-lg 
            rounded-circle start-btn d-flex justify-content-center">
                <i className="fas fa-desktop fa-2x "></i>
            </button>
            </div>
        </div>
        {/* </div> */}

        <div ref={webCardText} style={styles.projectText} className="container pt-5">
            <h2 className='jumbo-text'>Selected Projects</h2>
            <p className='info-text'>Click on cards to see a video of the project</p>
            <div style={styles.darkMode}>
            <button onClick={enableDarkMode} style={{position: 'relative'}} type="button" className="moon-btn
            rounded-circle dark-btn d-flex justify-content-center">
                <i className={ darkMode ? 'fas fa-sun' : 'fas fa-moon' }></i>
            </button>
            <p className='darkmode-text ml-3'>{darkMode ? 'Enable light mode' : 'Enable dark mode'}</p>
            </div>
        </div>

        {/* 
            OnClick on the card should also turn off all effects on cards and should replace 
            it with an border on the active card and a gradiant to see text and buttons for 
            github and the actual site. 
        */}

        <div ref={webCards} style={styles.cardRow}> 
            {projects.map((card, index) => (
                <Card 
                key = { index }
                name = {card.name}
                picture = {card.picture}
                clips = {
                    ()=> setNewVideo(card.clip, card.features, card.name, card.visit, card.viewCode)
                }
                />
            ))}
        </div>

            { previews ? 

            <VideoTron 
                name = {videoTitle}
                myRef = {sampleWebsite}
                preview = {videoPath}
                tech = {feature.map((feat, index) => <li key={index} style={{fontSize:"2vw"}}>{feat}</li>)}
                buttons = {
                    <>
                    <a href={visit} target="_blank" rel="noopener noreferrer" role="button" className="btn btn-primary btn-lg mx-2" style={{fontSize:"1vw"}}>
                        <i className="fas fa-search"></i> Visit Site
                    </a>
                    <a href={viewCode} target="_blank" rel="noopener noreferrer" role="button" className="btn btn-secondary btn-lg mx-2" style={{fontSize:"1vw"}}>
                        <i className="fas fa-laptop-code"></i> View Code
                    </a>
                    </>
                }
            /> : null}

        </>
    )
}

export default Websites
