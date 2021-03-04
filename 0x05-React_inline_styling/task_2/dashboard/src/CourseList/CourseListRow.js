import React from "react";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let clRow;
    const tableItemStyle = css(
        isHeader ? styles.CourseListTh : styles.CourseListTd
    );

    if (isHeader === true) {
        if (textSecondCell) {
            clRow = (
                <>
                    <th className={tableItemStyle}>{textFirstCell}</th>
                    <th className={tableItemStyle}>{textSecondCell}</th>
                </>
            );
        } else {
            clRow = <><th className={css(styles.CourseListThSpan2)} colSpan="2">{textFirstCell}</th></>;
        }
    } else if (isHeader === false) {
        clRow = (
            <>
                <td className={tableItemStyle}>{textFirstCell}</td>
                <td className={tableItemStyle}>{textSecondCell}</td>
            </>
        );
    }

    let isHeaderStyle;

    if (isHeader) isHeaderStyle = headerRowStyles;
    else isHeaderStyle = rowStyles;

    return <tr style={isHeaderStyle}>{clRow}</tr>;
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

const cssVars = {
    borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
    CourseListTh: {
        borderTop: `1px solid ${cssVars.borderTableColor}`,
        borderBottom: `1px solid ${cssVars.borderTableColor}`,
        textAlign: "left",
        fontSize: "18px",
    },

    CourseListThSpan2: {
        textAlign: "center",
    },

    CourseListTd: {
        textAlign: "left",
    },
});

export default CourseListRow;