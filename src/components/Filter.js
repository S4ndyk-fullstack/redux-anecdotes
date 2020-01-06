import React from 'react'
import { connect } from 'react-redux'
import { createFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    props.createFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
const mapDispatchToProps = {
  createFilter
}

const mapStateToProps = state => {
  return { 
    filter: state.filter
  }
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter