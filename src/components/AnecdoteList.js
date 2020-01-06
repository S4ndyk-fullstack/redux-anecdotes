import React, { useEffect } from 'react'
import anecdoteService from '../services/anecdoteService'
import sortBy from 'lodash/sortBy'
import { connect } from 'react-redux'
import { createVote, init } from '../reducers/anecdoteReducer'
import { createNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    props.createVote(anecdote.id)
    props.createNotification(`you voted '${anecdote.content}'`)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
  }

  useEffect(() => {
    anecdoteService.getAll()
      .then(data => props.init(data))
  }, [])

  return (
    <div>
      {
        props.anecdotesToShow
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

const filterAnecdotes = ({ anecdotes, filter }) => {
  const filtered = anecdotes.filter(anecdote => anecdote.content.includes(filter.filter))
  return sortBy(filtered, 'votes')
}

const mapDispatchToProps = {
  createVote,
  createNotification,
  hideNotification,
  init
}

const mapStateToProps = state => {
  return {
    anecdotesToShow: filterAnecdotes(state),
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}
const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
