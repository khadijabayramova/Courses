import React from "react";
import Course from "./Course";

function Courses({ courses, deleteCourse }) {
  console.log(courses);

  return (
    <>
      {" "}
      <h1>Courses</h1>
      <div className="courses">
        {courses.map((course) => {
          return (
            <Course {...course} key={course.id} deleteCourse={deleteCourse} />
          );
        })}
      </div>
    </>
  );
}

export default Courses;
