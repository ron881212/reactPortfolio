import React from 'react'


const Card = props => {
    // might have to change "border none" but this gives it a clean look
    return (  
    <div className="card projectCard mb-3" style={{opacity:"0", border:"none"}}>
        <img 
        src={props.picture} 
        className="card-img-top" 
        alt={props.name}
        onClick={props.clips}
        />
    </div>  
    )
}

export default Card
