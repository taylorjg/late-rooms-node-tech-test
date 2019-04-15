const axios = require('axios')

module.exports = {
  invoke: async id => {
    const config = {
      params: {
        id
      }
    }
    const { data } = await axios.get('http://lr-node-kata.herokuapp.com/details', config)
    return data
  }
}
