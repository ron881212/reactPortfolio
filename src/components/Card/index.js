import React from 'react'


const Card = props => {

    return (  
    <div className="card projectCard">
        <img src={props.picture} className="card-img-top" alt={props.name}/>
    </div>  
    )
}

export default Card
