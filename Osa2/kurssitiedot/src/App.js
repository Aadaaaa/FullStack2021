import React from 'react';
import Course from './components/Course'

export const App = ({ courses }) => {
  console.log(courses[0])
  return (
    <div>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}
