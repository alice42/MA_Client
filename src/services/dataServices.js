import {
  basicFetch,
  api,
  realtors,
  messages,
  page,
  dateDesc,
  pageSize
} from './utils'

export const getRealtorsMethod = () =>
  basicFetch('GET', `${api}${realtors}`, {})

export const getRealtorMethod = ({ realtorId }) =>
  basicFetch('GET', `${api}${realtors}${realtorId}`, {})

export const getMessageMethod = ({ realtorId, messageId }) =>
  basicFetch('GET', `${api}${realtors}${realtorId}${messages}${messageId}`, {})

export const fetchMessagesMethod = ({ pageIndex, realtorId }) => {
  return basicFetch(
    'GET',
    `${api}${realtors}${realtorId}${messages}${dateDesc}${page}${pageIndex}`,
    {}
  )
}

export const markAsReadMethod = ({ realtorId, message }) => {
  return basicFetch(
    'PATCH',
    `${api}${realtors}${realtorId}${messages}${message.id}`,
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
