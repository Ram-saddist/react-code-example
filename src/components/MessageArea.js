import React, { PureComponent } from 'react'

export default class MessageArea extends PureComponent {
  state={
    textMsg:""
  }
  handleChange=(e)=>{
    this.setState({
        textMsg:e.target.value
    })
  }
  handleClick=()=>{
    //console.log(this.state.textMsg)
    this.props.onSubmit({
        newMessage:this.state.textMsg
    })
    this.setState({
        textMsg:""
    })
  }
  render() {
    return (
      <div>
        <input className='input-field'
            placeholder='Enter message' 
            onChange={this.handleChange}
            value={this.state.textMsg}/> 
        <button className='btn' onClick={this.handleClick}>Send</button>
      </div>
    )
  }
}
