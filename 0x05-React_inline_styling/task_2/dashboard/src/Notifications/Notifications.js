import React from "react";
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.listNotifications.length > this.props.listNotifications.length
        );
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <>
                <div className={css(styles.menuItem)} id="menuItem">
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.notifications)} id="Notifications">
                        <button
                            style={{
                                background: "transparent",
                                border: "none",
                                position: "absolute",
                                right: 20,
                            }}
                            aria-label="close"
                        >
                            <img className={css(styles.closeImage)} src={closeIcon} alt="close-icon" />
                        </button>
                        <p className={css(styles.notificationsP)}>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.length === 0 && (
                                <NotificationItem value="No new notification for now" />
                            )}

                            {listNotifications.length > 0 && listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    id={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={this.markAsRead}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
    menuItem: {
        textAlign: "right",
    },
    notifications: {
        border: '2px dashed red',
        padding: '10px',
        marginBottom: '20px',
    },
    closeImage: {
        width: '10px',
        height: '10px',
    },
    notificationsP: {
        margin: 0,
        marginTop: "15px",
    },
});

export default Notifications;