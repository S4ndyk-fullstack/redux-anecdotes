import React from 'react'

const Notification = (props) => {
  const visible = props.store.getState().notification.visible
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log(props.store.getState().notification.content)

  if (visible) return (
    <div style={style}>
      {props.store.getState().notification.content}
    </div>
  )
  return <></>
}

export default Notification