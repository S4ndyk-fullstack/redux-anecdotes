import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification'
import Filter from './components/Filter';
import { init } from './reducers/anecdoteReducer'


const App = (props) => {
  useEffect(() => {
    props.init()
  }, [])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList  />
      <h2>create new</h2>
      <AnecdoteForm  />
    </div>
  )
}

const connectedApp = connect(null, { init })(App)

export default connectedApp