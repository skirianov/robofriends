import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
    return (
        <>
        {
            robots.map( (each, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email = {robots[i].email}
                        website = {robots[i].website}
                    />
                );
            })
        }
        </>
    );
}

export default CardList;