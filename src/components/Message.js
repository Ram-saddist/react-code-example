import React, { PureComponent } from 'react'

export default class Message extends PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
      </div>
    )
  }
}
