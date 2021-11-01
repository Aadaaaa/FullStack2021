import React from 'react'

const Header = ({ name }) => {

    return (
      <h1>{name}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
          {parts.map(part =>
            <Part key = {part.id} part = {part} />
          )}
        </div>
    )
}

const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((first, second) => first + second.exercises, 0)
    return (
        <div style={{fontWeight: "bold"}}>
            Total of {total} exercises
        </div>
    )
}

const Course = ({course}) => {
  return (
    <>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  )
} 

export default Course