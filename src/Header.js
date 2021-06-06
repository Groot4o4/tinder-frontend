import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

export default function Header() {
    return (
        <div className="header">
            
            <IconButton>
            <PersonIcon  fontSize="large" className="header_icon"/>
            </IconButton>

            <img className="header_logo" src="https://www.logolynx.com/images/logolynx/46/462e3c826faf5dee4004bddf78da0d45.jpeg" alt=""/>
            <IconButton>
            <ForumIcon  fontSize="large" className="header_icon"/>
            </IconButton>

            

        </div>
    )
}
