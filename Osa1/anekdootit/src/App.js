import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const randomize = () => Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(randomize())
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0])

  const setSelectedAnecdotes = () => setSelected(randomize())

  const Vote = () => {
    const copyOfVote = [...vote]
    copyOfVote[selected] += 1
    setVote(copyOfVote)
  }

  const mostVotes = anecdotes[vote.indexOf(Math.max(...vote))]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {vote[selected]} votes
      </div>
      <div>
        <Button handleClick={Vote} text="vote" />
        <Button handleClick={setSelectedAnecdotes} text="next anecdote" />
      </div>
      <h1>Anecdote with most votes</h1>
      {mostVotes}
      <div>
        has {Math.max(...vote)} votes
      </div>
    </div>
  )
}

export default App
