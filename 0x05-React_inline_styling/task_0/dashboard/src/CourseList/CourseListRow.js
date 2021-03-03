import React from "react";
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let clRow;
    const backgroundStyle = {
        background: isHeader === true ? "#deb5b545" : "#f5f5f5ab"
    }

    if (isHeader === true) {
        if (textSecondCell) {
            clRow = (
                <>
                    <th style={backgroundStyle}>{textFirstCell}</th>
                    <th style={backgroundStyle}>{textSecondCell}</th>
                </>
            );
        } else {
            clRow = <><th style={backgroundStyle} colSpan="2">{textFirstCell}</th></>;
        }
    } else if (isHeader === false) {
        clRow = (
            <>
                <td style={backgroundStyle}>{textFirstCell}</td>
                <td style={backgroundStyle}>{textSecondCell}</td>
            </>
        );
    }

    return <tr>{clRow}</tr>;
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CourseListRow;