import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.discogs.com/database/search',
  timeout: 10000,
  params: {
    token: process.env.REACT_APP_DISCOGS_TOKEN,
    per_page: 20,
  }
})

export default instance