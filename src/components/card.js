import React from 'react';

const Card = ({ name, email, id, website}) => {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?100x100`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <a href={`https://${website}`}>{`${website}`}</a>
            </div>
        </div>
    )
};

export default Card;