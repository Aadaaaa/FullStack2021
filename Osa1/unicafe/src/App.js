import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>good {props.good}</td>
        </tr>
        <tr>
          <td>neutral {props.neutral}</td>
        </tr>
        <tr>
          <td>bad {props.bad}</td>
        </tr>
        <tr>
          <td>all {props.good + props.bad + props.neutral}</td>
        </tr>
        <tr>
          <td>average {(props.good - props.bad) / (props.good + props.bad + props.neutral)} </td>
        </tr>
        <tr>
          <td>positive {100 * props.good / (props.good + props.bad + props.neutral) + " %"} </td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleTheGood = () => {
    setGood(good + 1)
  }

  const handleTheNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleTheBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleTheGood} text="good" />
        <Button handleClick={handleTheNeutral} text="neutral" />
        <Button handleClick={handleTheBad} text="bad" />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
