import { basicFetch, api, realtors, messages } from './utils'

export const getRealtorsMethod = () =>
  basicFetch('GET', `${api}${realtors}`, {})

export const getMessagesMethod = realtorId =>
  basicFetch('GET', `${api}${realtors}${realtorId}${messages}`, {})
