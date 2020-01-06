const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  console.log('anecdote state now: ', state)
  console.log('anecdote action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => id === anecdote.id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      const newState = state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)
      return newState
    case 'CREATE':
      return state.concat(action.data)
    case 'INITIALIZE':
      return action.data
    default: return state
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'CREATE',
    data: anecdote 
  }
}

export const createVote = (id) =>  {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}

export const init = (anecdotes) => {
  return {
    type: 'INITIALIZE',
    data: anecdotes 
  }
}

export default reducer