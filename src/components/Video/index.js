import React from 'react'

const VideoTron = props => {  

    return (
        <video 
        src={props.preview} 
        style={{width:"100%", marginTop:"-450px"}}
        loop 
        >
        </video>
    )
}

export default VideoTron