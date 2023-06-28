import React from "react";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
       
        const getScore = course.parts.reduce(
          (sum, part) => sum + part.exercises,
          0
        );
        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map((part) => {
              return (
                <div className="name-exercises" key={part.id}>
                  <p>
                    {part.name}: {part.exercises}
                  </p>
                </div>
              );
            })}
            <p>total of {getScore} exercises</p>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
