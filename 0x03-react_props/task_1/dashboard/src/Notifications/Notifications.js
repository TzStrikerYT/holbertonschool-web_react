import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import {getLatestNotification} from '../utils/utils';

function Notifications() {
    return (
        <div className="Notifications">
            <button className="close-button"
                    aria-label="Close"
                    onClick={() => {console.log("Close button has been clicked")}}
                    style={{
                        background: "transparent",
                        border: "none",
                        position: "absolute",
                        right: 10,
                    }}>
                <img src={close}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default Notifications;