import React from 'react'
import './styling.css'

const VideoTron = props => {  

    return (
        <div className="myGradient">
        <video 
        src={props.preview} 
        style={{width:"100%", marginTop:"-450px"}}
        ref={props.myRef}
        loop 
        >
        </video>
        </div>
    )
}

export default VideoTron