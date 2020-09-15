import React from 'react'

const Card = (props) => {
    return (
        <div className="tc bg-light-green grow  dib br3 pa3 ma2 bw2 shadow-5">
            {/* <h1>{props.username}</h1> */}
            <img src={`https://robohash.org/${props.id}?size=200x200`} alt="foto"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card
