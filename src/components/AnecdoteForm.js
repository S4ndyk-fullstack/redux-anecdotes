import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification, createNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    props.createAnecdote(anecdote)
    props.createNotification(`created '${anecdote}'`)
    setTimeout(() => {
      props.hideNotification()
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

const mapDispatchToProps = {
  createAnecdote,
  createNotification,
  hideNotification
}

const ConnectedAnecdoteForm = connect(undefined, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm