import Axios from 'axios'

// const baseUrl = 'http://192.168.144.210:3002'
const baseUrl = 'http://192.168.31.44:3001'

const axios = Axios.create({
  timeout: 5000,
  baseURL: baseUrl,
})

axios.interceptors.request.use((value) => {
  console.log(value)
  return value
})

axios.interceptors.response.use((res) => {
  return res
})

export default axios
