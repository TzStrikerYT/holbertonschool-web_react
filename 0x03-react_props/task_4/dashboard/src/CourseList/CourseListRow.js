import React from "react";
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let clRow;

    if (isHeader === true) {
        if (textSecondCell) {
            clRow = <><th>{textFirstCell}</th><th>{textSecondCell}</th></>;
        } else {
            clRow = <><th colSpan="2">{textFirstCell}</th></>;
        }
    } else if (isHeader === false) {
        clRow = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>;
    }

    return <tr>{clRow}</tr>;;
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

export default CourseListRow;