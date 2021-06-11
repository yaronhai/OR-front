import React from 'react';
import './rooms.styles.scss';
import ROOMS_DATA from './rooms.data.js';
import SITES_DATA from './sites.data.js';


class Rooms extends React.Component{
    constructor(){
        super();
        this.state = {
            sites: SITES_DATA,
            rooms: ROOMS_DATA
        }
    }
    render(){
        const {rooms, sites} = this.state;
        console.log(rooms)
        return(
            <div >
                <button onClick={() => this.props.history.push('/')}>HOMEPAGE</button>
                <h1>TEST Rooms</h1>
                <div className='site-container'>
                    { 
                        sites.map(site => (
                            <div key={site.id} className='site'>
                                <h1 >{site.site.toUpperCase()}</h1>
                                <div className='rooms-container'>
                                    {rooms.filter((room, idx) => room.site === site.site).map(room =>( 
                                        <div key={room.id} className='room'>
                                            <h3 className='title'>{`${room.description}`}</h3>
                                            {/* {`${room.site}`} */}
                                        </div>    
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

export default Rooms;