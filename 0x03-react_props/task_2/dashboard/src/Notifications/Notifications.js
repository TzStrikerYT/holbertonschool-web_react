import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import {getLatestNotification} from '../utils/utils';
import NotificationItem from "./NotificationItem";

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
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
            </ul>
        </div>
    )
}

export default Notifications;