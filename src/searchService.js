const axios = require('axios')

module.exports = {
  invoke: async term => {
    const { data } = await axios.get(`http://lr-node-kata.herokuapp.com/search/${term}`)
    return data
  }
}
