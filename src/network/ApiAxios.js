import axios from 'axios'
import config from './config.js'

const instance = axios.create({
  baseURL: config.WS_BASE_URL
})

// instance.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem('token')
//   config.headers['x-access-token'] = token ? token : ''
//   config.headers.ContentType = 'application/json'
//   return config
// })

export const getSectionCategory = async () =>
  await instance.get('sectionCategory?fields=*.*.*')

export const getDocumentation = async () =>
  await instance.get('section?fields=*.*.*.*.*.*')
