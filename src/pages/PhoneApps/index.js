import React, {useRef, useState, useLayoutEffect} from 'react'
import phoneProjects from './phoneApps.json'
import Card from '../../components/Card'
import Nav from '../../components/Nav'
import VideoTron from '../../components/Video'
import './styles.css'

const PhoneApps = () => {

  const hero = useRef(null)
  const phoneCards = useRef(null)
  const phoneCardText = useRef(null)
  const sampleWebsite = useRef(null)
  const [projects] = useState(phoneProjects)
  const [videoPath, setVideoPath] = useState(null)
  const [videoTitle, setVideoTitle] = useState(null)
  const [visit, setVisit] = useState(null)
  const [viewCode, setViewCode] = useState(null)
  const [feature, setFeature] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [previews, setPreviews] = useState(false)

  // useLayoutEffect(()=> darkMode ? backgroundDark() : backgroundLight())

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

  function showProjects() {
    showCards()
    projectText()
    hero.current.style.opacity = "0"
    phoneCards.current.style.display = "flex"
    hero.current.style.transition = "ease 1s"
    hero.current.style.transform = "translate(0px, -300px)"
  }
  function showCards() {
    setTimeout(firstProject, 300)
    setTimeout(secondProject, 500)
    setTimeout(thirdProject, 700)
  }
  function projectText() {
    phoneCardText.current.style.visibility = "visible"
    phoneCardText.current.style.transition = "ease 1.5s"
    phoneCardText.current.style.transform = "translate(0px, -600px)"
  }
  function backgroundDark(){  
      const projectCard1 = phoneCards.current.childNodes[0]
      const projectCard2 = phoneCards.current.childNodes[1]
      const projectCard3 = phoneCards.current.childNodes[2]
      document.body.style.backgroundColor = "black"
      projectCard1.style.backgroundColor = "black"
      projectCard2.style.backgroundColor = "black"
      projectCard3.style.backgroundColor = "black"
  }
  function backgroundLight(){
      const projectCard1 = phoneCards.current.childNodes[0]
      const projectCard2 = phoneCards.current.childNodes[1]
      const projectCard3 = phoneCards.current.childNodes[2]
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
    scrollToRef(phoneCards) 
  }

return(
  <>
    <div ref={hero} className="container pt-5">
      <img src="./images/phoneApps/PhoneApps.png" alt='code' className="img-fluid"/>
      <h2 className='jumbo-text text-center'>All Phone Apps below are full stack</h2>
      <p className='text-center info-text'>Click Below to see Projects</p>
      <div className="d-flex justify-content-center">
      <button onClick={null} type="button" className="btn btn-primary btn-lg 
      rounded-circle start-btn d-flex justify-content-center">
        <i className="fas fa-desktop fa-2x "></i>
      </button>
      </div>
    </div>

    <div ref={phoneCardText} style={styles.projectText} className="container pt-5">
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

    <div ref={phoneCards} style={styles.cardRow}> 
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

export default PhoneApps