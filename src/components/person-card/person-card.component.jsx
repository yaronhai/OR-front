import React from 'react';
import './person-card.styles.scss';

const PersonCard = ({person}) => {
    return(
        <div className='card'>
            <img 
                alt="monster" 
                src={`https://robohash.org/${person.id}?set=set4&size=300x300`}
                width= "80"
                height= "100"
            />
            <h2>{person.name}</h2>
            <p>{person.email}</p>
            <p>Tel: {person.phone}</p>
        </div>
    )
}

export default PersonCard;