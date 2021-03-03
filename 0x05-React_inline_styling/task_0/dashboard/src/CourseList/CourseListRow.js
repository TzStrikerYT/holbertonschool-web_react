import React from "react";
import PropTypes from 'prop-types';

/* Styles for row */

const rowStyle = {
    backgroundColor: "#f5f5f5ab" /*bg-color */
};

/* Styles for header*/
const headerRowStyle = {
    backgroundColor: "#deb5b545"/* bg-color */
};

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

    /* Styles application */

    let styleOf;

    /* apply a style in the header aand in the rows*/
    styleOf = isHeader ? headerRowStyle : rowStyle;

    return <tr style={styleOf}>{clRow}</tr>;
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