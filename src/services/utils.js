//api
export const api = 'http://34.76.140.183'

export const realtors = '/realtors/'
export const messages = '/messages/'

export const page = '?page='
//BASIC FETCH API METHOD
export const basicFetch = async (method, url, config, data) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
    const textResponse = await response.text()
    const result = {
      data: textResponse,
      status: response.status
    }
    return result
  } catch (error) {
    return error
  }
}
