import React from "react";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
    return (
        <>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <button
                        style={{
                            background: "transparent",
                            border: "none",
                            position: "absolute",
                            right: 20,
                        }}
                        aria-label="close"
                        className="close-button"
                    >
                        <img src={closeIcon} alt="close-icon" />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 && (
                            <NotificationItem value="No new notification for now" />
                        )}

                        {listNotifications.length > 0 && listNotifications.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                type={notification.type}
                                value={notification.value}
                                html={notification.html}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;