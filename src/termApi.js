const express = require('express')

const configureTermApi = service => {

  const getTerm = async (req, res) => {
    const { term } = req.params
    const result = await service.getTerm(term)
    res.json(result)
  }

  const router = express.Router()
  router.get('/:term', getTerm)

  return router
}

module.exports = configureTermApi
