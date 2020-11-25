import axios from 'axios'

class Http {
  static instance = new Http()
  server = 'http://localhost:3004/'

  get = async (param) => {
    try {
      const response = await axios.get(`${this.server}${param}`)
      return response.data
    } catch (error) {
      throw Error(error.response.data.body)
    }
  }

  post = async (param, body) => {
    try {
      const response = await axios.post(`${this.server}${param}`, body, {
        'Content-Type': 'application/json'
      })
      return response.data
    } catch (error) {
      throw Error(error.response.data.body)
    }
  }

  put = async (param, body) => {
    try {
      const response = await axios.put(`${this.server}${param}`, body, {
        'Content-Type': 'application/json'
      })
      return response.data
    } catch (error) {
      throw Error(error.response.data.body)
    }
  }

  delete = async (param) => {
    try {
      const response = await axios.delete(`${this.server}${param}`)
      return response.data
    } catch (error) {
      throw Error(error.response.data.body)
    }
  }
}

export default Http
