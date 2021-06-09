import React from 'react';
import './rooms.styles.scss';
import ROOMS_DATA from './rooms.data.js';

class Rooms extends React.Component{
    constructor(){
        super();
        this.state = {
            rooms: ROOMS_DATA
        }
    }
    render(){
        const {rooms} = this.state;
        console.log(rooms)
        return(
            <div>
                <h1>TEST Rooms</h1>
                { 
                    rooms.map(room =>( 
                        <div key={room.id} className='room'>
                            {`${room.description}, ${ room.site}`}
                            
                        </div>
                    ))
                }
                
            </div>
        )
    }
}

export default Rooms;