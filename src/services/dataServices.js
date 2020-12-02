import { basicFetch, api, realtors, messages } from './utils'

export const getRealtorsMethod = () =>
  basicFetch('GET', `${api}${realtors}`, {})
