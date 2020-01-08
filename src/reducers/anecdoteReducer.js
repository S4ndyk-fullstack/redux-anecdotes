import anecdoteService from '../services/anecdoteService'

const reducer = (state = [], action) => {
  console.log('anecdote state now: ', state)
  console.log('anecdote action', action)
  switch (action.type) {
    case 'VOTE':
      const changedAnecdote = action.data
      return state.map(anecdote => anecdote.id === changedAnecdote.id ? changedAnecdote : anecdote)
    case 'CREATE':
      return state.concat(action.data)
    case 'INITIALIZE':
      return action.data
    default: return state
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(anecdote)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const createVote = anecdote =>  {
  return async dispatch => {
    const patchedAnecdote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: patchedAnecdote
    })
  }
}

export const init = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch({
      type: 'INITIALIZE',
      data: anecdotes
    })
  }
}

export default reducer