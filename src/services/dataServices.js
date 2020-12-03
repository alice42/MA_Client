import { basicFetch, api, realtors, messages, page } from './utils'

export const getRealtorsMethod = () =>
  basicFetch('GET', `${api}${realtors}`, {})

export const fetchMessagesMethod = ({ pageIndex, realtorId }) => {
  return basicFetch(
    'GET',
    `${api}${realtors}${realtorId}${messages}${page}${pageIndex}`,
    {}
  )
}
