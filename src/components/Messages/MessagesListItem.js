import React from 'react'

const MessagesListItem = ({ message }) => {
  return (
    <div key={message.id}>
      <article>
        <header>
          <h2> {message.type} </h2>
        </header>
        <p> {message.body} </p>
      </article>
    </div>
  )
}

export default MessagesListItem
