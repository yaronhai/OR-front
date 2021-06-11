import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

const Header = () =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <img 
                src='https://thumb.tildacdn.com/tild6636-6333-4266-b064-356334313162/-/format/webp/IR_icon.png' 
                alt='HOMEPAGE'
                width= "70"
                height="70"
            />
        </Link>
        <div className='options'>
            <Link className='option'  to='/rooms'>
                ROOMS
            </Link>
            <Link className='option'  to='/contact'>
                CONTACT
            </Link>

        </div>
    </div>
)

export default Header;