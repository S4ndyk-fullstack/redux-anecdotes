import React from 'react'
import sortBy from 'lodash/sortBy'
import { createVote } from '../reducers/anecdoteReducer'
import { createNotification, hideNotification } from '../reducers/notificationReducer'
const AnecdoteList = (props) => {
  const anecdotes = sortBy(props.store.getState().anecdotes, 'votes')
  const filter = props.store.getState().filter.filter

  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    props.store.dispatch(createVote(anecdote.id))
    props.store.dispatch(createNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => {
      props.store.dispatch(hideNotification())
    }, 5000)
  }

  return (
    <div>
      {
        anecdotes
        .filter(anecdote => 
          anecdote.content.includes(filter))
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList
