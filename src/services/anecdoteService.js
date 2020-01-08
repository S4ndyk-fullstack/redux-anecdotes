import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const create = async (content) => {
  const newAnecdote = {
    content,
    votes: 0
  }
  const res = await axios.post(baseUrl, newAnecdote)
  return res.data
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const vote = async anecdote => {
  const votedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1
  }
  const res = await axios.put(`${baseUrl}/${votedAnecdote.id}`, votedAnecdote )
  return res.data
}

export default { create, getAll, vote }