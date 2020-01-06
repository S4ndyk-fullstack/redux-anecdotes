import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification, createNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    props.store.dispatch(createAnecdote(anecdote))
    props.store.dispatch(createNotification(`created '${anecdote}'`))
    setTimeout(() => {
      props.store.dispatch(hideNotification())
    }, 5000)
    event.target.anecdote.value = ''
  }
  return(
      <form onSubmit={create}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
  )
}

export default AnecdoteForm