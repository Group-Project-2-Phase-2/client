import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://guarded-garden-08318.herokuapp.com'
})

export default instance
