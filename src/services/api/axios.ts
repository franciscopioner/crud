import Axios from 'axios'
// import { DRAGONS_API_URL } from '../core/constants/env'

export const dragonsClient = Axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io',
})
