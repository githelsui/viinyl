import axios from 'axios'

export const allId = 0 // 'All folder'
export const uncategorizedId = 1 // 'Uncategorized folder'

const instance = axios.create({
  baseURL: `https://api.discogs.com/users/${process.env.REACT_APP_DISCOGS_USER}/collection/folders`,
  timeout: 10000,
  params: {
    token: process.env.REACT_APP_DISCOGS_TOKEN,
    'per_page': 20
  }
})

export const byRelease = axios.create({
  baseURL: `https://api.discogs.com/users/${process.env.REACT_APP_DISCOGS_USER}/collection/releases`,
  timeout: 10000,
  params: {
    token: process.env.REACT_APP_DISCOGS_TOKEN,
    'per_page': 20
  }
})

export default instance