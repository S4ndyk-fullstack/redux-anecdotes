import React from 'react'
import sortBy from 'lodash/sortBy'
import { createVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {

  const anecdotes = sortBy(props.store.getState(), 'votes')
  const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch(createVote(id))
  }

  return (
    <div>
      {
        anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList
