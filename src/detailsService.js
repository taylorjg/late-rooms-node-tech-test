const axios = require('axios')

const configureDetailsService = baseURL => {

  const axiosInstance = axios.create({ baseURL })

  return {
    invoke: async ids => {
      const config = {
        params: {
          id: ids
        }
      }
      const { data } = await axiosInstance.get(`/details`, config)
      return data
    }
  }
}

module.exports = configureDetailsService
