import React from 'react'
import './styling.css'

const VideoTron = props => {  

    return (
        <div className="videoContainer">
        <div className="banner">
        <h2 className="videoTitle">{props.name}</h2>
        <h3 className="features">Technology</h3>
        <ul>
            {props.tech}
        </ul>
        </div>
        <div className="myGradient"></div>
        <video 
        src={props.preview} 
        style={{maxWidth:"100%", width:"70%"}}
        ref={props.myRef}
        loop 
        >
        </video>
        </div>
    )
}

export default VideoTron