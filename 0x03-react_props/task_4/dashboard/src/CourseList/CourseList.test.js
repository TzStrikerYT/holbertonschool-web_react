import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
    it("CourseList renders without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("it renders the 5 different rows", () => {
        const wrapper = shallow(<CourseList />);
        wrapper.update();
        const element = wrapper.find("CourseListRow");

        expect(element).toHaveLength(5);

        expect(element.at(0).prop("textFirstCell")).toEqual("Available courses");
        expect(element.at(0).prop("isHeader")).toEqual(true);

        expect(element.at(1).prop("textFirstCell")).toEqual("Course name");
        expect(element.at(1).prop("textSecondCell")).toEqual("Credit");
        expect(element.at(1).prop("isHeader")).toEqual(true);

        expect(element.at(2).prop("textFirstCell")).toEqual("ES6");
        expect(element.at(2).prop("textSecondCell")).toEqual("60");
        expect(element.at(2).prop("isHeader")).toEqual(false);

        expect(element.at(3).prop("textFirstCell")).toEqual("Webpack");
        expect(element.at(3).prop("textSecondCell")).toEqual("20");
        expect(element.at(3).prop("isHeader")).toEqual(false);

        expect(element.at(4).prop("textFirstCell")).toEqual("React");
        expect(element.at(4).prop("textSecondCell")).toEqual("40");
        expect(element.at(4).prop("isHeader")).toEqual(false);
    });
});
