import React, { PureComponent } from 'react'
import Message from './Message'
import MessageArea from './MessageArea'
export default class MessageList extends PureComponent {
  constructor(){
    super()
    this.state={
        messageStorage:[]
    }
  }
  add=(newVal)=>{
   // console.log(newVal," from messagelist component")
    this.setState({
        messageStorage:[...this.state.messageStorage,newVal]
    })
  }
  render() {
    console.log(this.state.messageStorage)
    return (
      <div>
        <MessageArea onSubmit={this.add}/>
        {
            this.state.messageStorage.map((it)=>(
                <Message msg={it.newMessage}/>
            ))
        }
      </div>
    )
  }
}
