import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const visible = props.notification.visible
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log(props.notification.content)

  if (visible) return (
    <div style={style}>
      {props.notification.content}
    </div>
  )
  return <></>
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification