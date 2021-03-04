import React from "react";
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import './CourseList.css'

function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(styles.table_list)}>
            <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow
                textFirstCell="Course name"
                textSecondCell="Credit"
                isHeader={true}
            />
            </thead>
            <tbody>
            {listCourses.length === 0 && (<CourseListRow textFirstCell="No course available yet" isHeader={false}/>)}

            {listCourses.length > 0 && listCourses.map((course) => (
                <CourseListRow
                    key={course.id}
                    textFirstCell={course.name}
                    textSecondCell={course.credit}
                    isHeader={false}
                />
            ))}
            </tbody>
        </table>
    );
}

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

const cssVars = {
    borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
    table_list: {
        border: `1px solid ${cssVars.borderTableColor}`,
        borderCollapse: "collapse",
        width: "95%",
        marginTop: "40px",
    },
});
export default CourseList;