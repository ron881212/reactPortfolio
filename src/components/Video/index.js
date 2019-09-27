import React from 'react'
import './styling.css'

const VideoTron = props => {  

    return (
        <div className="videoContainer">
        <div className="myGradient"></div>
        <video 
        src={props.preview} 
        style={{maxWidth:"100%"}}
        ref={props.myRef}
        loop 
        >
        </video>
        </div>
    )
}

export default VideoTron