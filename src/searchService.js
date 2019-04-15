const axios = require('axios')

const configureSearchService = baseURL => {

  const axiosInstance = axios.create({ baseURL })

  return {
    invoke: async term => {
      const { data } = await axiosInstance.get(`/search/${term}`)
      return data
    }
  }
}

module.exports = configureSearchService
