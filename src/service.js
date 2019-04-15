// searchEndpoint
// http://lr-node-kata.herokuapp.com/search/{term}
// => 
// [
//   "16296360",
//   "11492793",
//   "16845998",
//   "16837690",
//   "16293369"
// ]
//
// detailsEndpoint
// http://lr-node-kata.herokuapp.com/details/?id={id}
// => 
// [
//   {
//   "id": 16296360,
//   "type": "k",
//   "count": 43,
//   "text": "Manfield"
//   }
// ]

const configureService = (searchEndpoint, detailsEndpoint) => {

  const getTerm = term => {
    return {
      message: `Hello ${term}`
    }
  }

  return {
    getTerm
  }
}

module.exports = configureService
