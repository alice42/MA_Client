import React, { Component } from 'react'
import ReduxLazyScroll from 'redux-lazy-scroll'
import Post from './MessagesListItem'

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
        >
          {messages.map(message => (
            <Post key={message.id} message={message} />
          ))}
        </ReduxLazyScroll>
        <div>
          {isFetching && <div> Loading more messages... </div>}

          {!hasMore && !errorMessage && (
            <div>All the messages has been loaded successfully.</div>
          )}

          {errorMessage && <div>{errorMessage}</div>}
        </div>
      </div>
    )
  }
}

export default MessagesList
