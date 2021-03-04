import React from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { type, value, html, markAsRead, id } = this.props;
        let listItem;
        let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

        if (value) {
            listItem = (
                <li data-notification-type={type}
                    onClick={() => markAsRead(id)}
                    className={typeStyle}
                >
                    {value}
                </li>
            );
        } else {
            listItem = (
                <li
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead(id)}
                    className={typeStyle}
                >
                </li>
            );
        }

        return listItem;
    }
}

NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: {},
    markAsRead: () => {},
    id: NaN,
};

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

const styles = StyleSheet.create({
    default: {
        color: "blue",
    },
    urgent: {
        color: "red",
    },
});

export default NotificationItem;