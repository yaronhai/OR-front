import React from 'react';
import './person-card-list.styles.scss';
import PersonCard from '../person-card/person-card.component';

const PersonCardList = (props) => {
    return(
        <div className='cardlist'>
            {
                props.persons.map(person => (
           		    <PersonCard key={person.id} person={person}/> 
                ))}
        </div>
    )
}

export default PersonCardList;