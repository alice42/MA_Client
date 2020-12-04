import React, { Component } from 'react'
import ReduxLazyScroll from 'redux-lazy-scroll'
import MessageList from './MessagesListItem'

class MessagesList extends Component {
  constructor(props) {
    super(props)
    this.loadMessages = this.loadMessages.bind(this)
  }

  loadMessages() {
    const { pageIndex } = this.props.messageEntity
    this.props.dataActions.fetchMessages(pageIndex, this.props.realtor.id)
  }

  render() {
    const {
      messages,
      isFetching,
      errorMessage,
      hasMore
    } = this.props.messageEntity
    return (
      <div>
        <ReduxLazyScroll
          isFetching={isFetching}
          errorMessage={errorMessage}
          loadMore={this.loadMessages}
          hasMore={hasMore}
          isParentScrollable={true}
          parentHeight={'calc(100vh - 67px)'}
        >
          {messages.map(message => (
            <MessageList
              {...this.props}
              key={message.id}
              message={message}
              realtorId={this.props.realtor.id}
            />
          ))}
        </ReduxLazyScroll>
      </div>
    )
  }
}

export default MessagesList
