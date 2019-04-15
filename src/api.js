const express = require('express')
const configureService = require('./service')

const configureApi = (searchEndpoint, detailsEndpoint) => {

  const service = configureService(searchEndpoint, detailsEndpoint)

  const getTerm = (req, res) => {
    const { term } = req.params
    const result = service.getTerm(term)
    res.json(result)
  }

  const router = express.Router()
  router.get('/:term', getTerm)

  return router
}

module.exports = configureApi
