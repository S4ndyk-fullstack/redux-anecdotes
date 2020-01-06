import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { hideNotification, createNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdoteService'
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const anecdote = await anecdoteService.create(content)
    props.createAnecdote(anecdote)
    props.createNotification(`created '${anecdote.content}'`)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
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

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm