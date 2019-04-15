const express = require('express')
const configureService = require('./service')

const configureApi = (searchService, detailsService) => {

  const service = configureService(searchService, detailsService)

  const getTerm = async (req, res) => {
    const { term } = req.params
    const result = await service.getTerm(term)
    res.json(result)
  }

  const router = express.Router()
  router.get('/:term', getTerm)

  return router
}

module.exports = configureApi
