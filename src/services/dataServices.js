import { basicFetch, api, realtors, messages, page } from './utils'

export const getRealtorsMethod = () =>
  basicFetch('GET', `${api}${realtors}`, {})

export const getMessageMethod = ({ realtorId, messageId }) =>
  basicFetch('GET', `${api}${realtors}${realtorId}${messages}${messageId}`, {})

export const fetchMessagesMethod = ({ pageIndex, realtorId }) => {
  return basicFetch(
    'GET',
    `${api}${realtors}${realtorId}${messages}${page}${pageIndex}`,
    {}
  )
}

export const markAsReadMethod = ({ realtorId, messageId, message }) => {
  console.log(realtorId, messageId, message)
  return basicFetch(
    'PATCH',
    `${api}${realtors}${realtorId}${messages}${messageId}`,
    {},
    `{
      "subject": "${message.subject}",
        "contact": {
          "firstname": "${message.contact.firstname}",
          "lastname": "${message.contact.lastname}",
          "phone": "${message.contact.phone}",
          "email": "${message.contact.email}"
        },
      "type": "${message.type}",
      "date": "${message.date}",
      "body": "${message.body}",
      "read": true
    }`
  )
}
